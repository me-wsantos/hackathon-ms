import uuid
import azure.functions as func
import logging
import json
import base64
from azure.core.credentials import AzureKeyCredential
from azure.ai.documentintelligence import DocumentIntelligenceClient
from azure.ai.documentintelligence.models import AnalyzeDocumentRequest
from pydantic import BaseModel
from typing import Optional
from azure.storage.blob import BlobServiceClient
from openai import AzureOpenAI  

endpoint = ""
key = ""
openia_api_key = ""
model_id = ""
endpoint_openia = ""

class CVField(BaseModel):
    value: Optional[str] = None
    confidence: Optional[float] = None

class CVData(BaseModel):
    name: Optional[CVField] = None
    endereco: Optional[CVField] = None
    resumo: Optional[CVField] = None
    experiencia: Optional[CVField] = None
    skills: Optional[CVField] = None
    educacao: Optional[CVField] = None
    telefone: Optional[CVField] = None
    email: Optional[CVField] = None
    model_id: Optional[str] = None

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="gerar_perfil", methods=["POST"])
def gerar_perfil(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    try:
        req_body = req.get_json()
    except ValueError:
        return func.HttpResponse("Payload inválido, envie um JSON", status_code=400)

    cv_base64 = req_body.get("cv")
    file_name = req_body.get("file_name")
    file_type = req_body.get("file_type")

    if not file_type:
        return func.HttpResponse("Campo 'file_type' não encontrado no payload", status_code=400)
    # valida para os formatos jpg, jpeg, jpe, jif, jfi, jfif, pdf, png, tif, tiff
    if file_type not in ["pdf", "jpeg", "jpg", "png"]:
        return func.HttpResponse("Tipo de arquivo inválido, envie um arquivo PDF, JPG, JPEG ou PNG", status_code=400)

    if not file_name:
        # gera um guid ao lado do cv.pdf
        file_name = f"{uuid.uuid4()}-cv.{file_type}"
    
    if not cv_base64:
        return func.HttpResponse("Campo 'cv' não encontrado no payload", status_code=400)
    
    # upload do cv para o blob storage, cria container se nao existir, chamado cv_data
    # retorna url do cv
    storage_acc_connection = ''
    container_name = 'cvdata'

    # Inicializa o cliente do Blob Storage
    blob_service_client = BlobServiceClient.from_connection_string(storage_acc_connection)

    # Garante que o container existe
    try:
        container_client = blob_service_client.get_container_client(container_name)
        if not container_client.exists():
            container_client.create_container()
    except Exception as e:
        logging.error(f"Erro ao criar/obter container do blob storage: {e}")
        return func.HttpResponse("Erro ao criar/obter container do blob storage.", status_code=500)

    try:
        # Decodifica Base64 para bytes
        cv_binary = base64.b64decode(cv_base64)

        # Cliente do blob
        blob_client = blob_service_client.get_blob_client(container=container_name, blob=file_name)

        # Upload do arquivo binário
        blob_client.upload_blob(cv_binary, overwrite=True)

        # Retorna a URL do blob armazenado
        doc_url = blob_client.url
        print(f"Arquivo salvo com sucesso: {doc_url}")
    except Exception as e:
        logging.error(f"Erro no upload do cv para o blob storage: {e}")
        return func.HttpResponse("Erro no upload do cv para o blob storage.", status_code=500)

    result_json = None
    # analisa o cv no document inteligence
    try:
        result = analyze_cv(doc_url)

        result_dict = result.dict()  # Converte para dicionário
        result_json = json.dumps(result_dict)  # Converte o dicionário para JSON

    except Exception as e:
        logging.error(f"Erro ao processar CV: {e}")
        return func.HttpResponse("Erro ao processar CV", status_code=500)

    try:
        openai_client = AzureOpenAI(
            azure_endpoint=endpoint_openia,
            api_key=openia_api_key,
            api_version="2024-05-01-preview",  
        )
        logging.info("Client OpenAI criado com sucesso")

        payload = [
            {
                "role": "system",
                "content": 'Extraia e organize informações de um currículo a partir de um JSON. Limpe dados sujos (caracteres extras, palavras desnecessárias, símbolos indesejados) e resuma se necessário.Sempre retorne um JSON com a seguinte estrutura fixa, mantendo os tipos de dados padronizados: {"Nome":"string","Endereço":"string","Resumo":"string","Experiência":[{"Cargo":"string","Empresa":"string","Período":"string","Descrição":"string"}],"Skills":["string"],"Educação":{"EnsinoMédio":[{"Instituição":"string","Período":"string"}],"Técnico":[{"Curso":"string","Instituição":"string","Período":"string"}],"Graduação":[{"Curso":"string","Instituição":"string","Período":"string"}],"Pós-Graduação":[{"Curso":"string","Instituição":"string","Período":"string"}],"Mestrado":[{"Curso":"string","Instituição":"string","Período":"string"}],"Doutorado":[{"Curso":"string","Instituição":"string","Período":"string"}],"Pós-Doutorado":[{"Curso":"string","Instituição":"string","Período":"string"}],"PhD":[{"Curso":"string","Instituição":"string","Período":"string"}],"Certificações":[{"Curso":"string","Instituição":"string","Período":"string"}],"CursosComplementares":[{"Curso":"string","Instituição":"string","Período":"string"}]},"Telefone":"string","Email":"string"}'
            },
            {
                "role": "user",
                "content": json.dumps(result_json, ensure_ascii=False)  # Garante que os caracteres acentuados sejam preservados corretamente
            }
        ]

        # Chamando a API 
        completion = openai_client.chat.completions.create(
            model="connectia-gpt-4o",
            messages=payload,
            max_tokens=2025,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,  
            presence_penalty=0,
            stop=None,  
            stream=False 
        )

        return func.HttpResponse(completion.choices[0].message.content, status_code=200, mimetype="application/json")

    except Exception as e:
        logging.error(f"Erro ao criar/comunicar cliente OpenAI: {e}")
        return func.HttpResponse("Erro ao criar/comunicar cliente OpenAI", status_code=500)

def analyze_cv(doc_url):
    document_intelligence_client  = DocumentIntelligenceClient(
        endpoint=endpoint, credential=AzureKeyCredential(key)
    )

    # Make sure your document's type is included in the list of document types the custom model can analyze
    poller = document_intelligence_client.begin_analyze_document(
        model_id, AnalyzeDocumentRequest(url_source=doc_url)
    )
    result = poller.result()
    extracted_data = {}

    for document in result.documents:
        for name, field in document.fields.items():
            if field and field.content:
                extracted_data[name] = {
                    "value": field.content,
                    "confidence": field.confidence
                }

    return CVData(
        name=CVField(**extracted_data.get("name", {})),
        endereco=CVField(**extracted_data.get("endereco", {})),
        resumo=CVField(**extracted_data.get("resumo", {})),
        experiencia=CVField(**extracted_data.get("experiencia", {})),
        skills=CVField(**extracted_data.get("skills", {})),
        educacao=CVField(**extracted_data.get("educacao", {})),
        telefone=CVField(**extracted_data.get("telefone", {})),
        email=CVField(**extracted_data.get("email", {})),
        model_id=result.model_id
    )

@app.route(route="gerar_plano", methods=["POST"])
def gerar_plano(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    try:
        req_body = req.get_json()
    except ValueError:
        return func.HttpResponse("Payload inválido, envie um JSON", status_code=400)

    perfil = req_body.get("perfil")
    if not perfil:
        return func.HttpResponse("Campo 'perfil' não encontrado no payload", status_code=400)

    try:

        openai_client = AzureOpenAI(
            azure_endpoint=endpoint_openia,
            api_key=openia_api_key,
            api_version="2024-05-01-preview",  
        )

        logging.info("Client OpenAI criado com sucesso")

        payload = [
            {
                "role": "system",
                "content": "You are a career coach specializing in inclusion and an experienced recruiter, focused on helping people with disabilities achieve employment opportunities. I am a recruiter, and I analyze several resumes daily. Your task is to assist me in analyzing resumes, following these detailed steps:1. Candidate SWOT AnalysisStrengths: Conduct an assessment of the candidate's strengths, highlighting their prominent skills and competencies.Weaknesses: Identify areas that need improvement and the challenges faced by the candidate.Opportunities: Present opportunities for career growth and advancement, considering current market trends.Threats: Indicate potential external threats that may impact the candidate's success in selection processes.2. Personalized Development PlanArea of Expertise: Evaluate the candidate's area of specialization.Development and Improvements: Create a development plan based on the identified weaknesses, including:Strategies to strengthen the candidate's skills.Recommendations for relevant courses, training, or certifications.Concrete actions to improve their positioning in selection processes.3. Result FormattingMarkdown: Structure the result using markdown to provide an organized and easy-to-read presentation on web platforms:Titles: Use ### to identify main sections.Lists: Use bulleted lists to highlight items in each category.Emphasis: Apply formatting to emphasize critical points.Implement this method to ensure effective and inclusive support, resulting in a structured plan that enhances the candidate's chances of success in future employment opportunities.This report aims to provide the recruiter with guidance for the candidate's professional growth; therefore, maintain communication focused on the recruiter, not the candidate."
            },
            {
                "role": "user",
                "content": json.dumps(perfil, ensure_ascii=False)  # Garante que os caracteres acentuados sejam preservados corretamente
            }
        ]

        completion = openai_client.chat.completions.create(
            model="connectia-gpt-4o",
            messages=payload,
            max_tokens=2025,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,  
            presence_penalty=0,
            stop=None,  
            stream=False 
        )

        return func.HttpResponse(completion.choices[0].message.content, status_code=200)

    except Exception as e:
        logging.error(f"Erro ao gerar plano de carreira: {e}")
        return func.HttpResponse("Erro ao gerar plano de carreira.", status_code=500)

@app.route(route="gerar_entrevista", methods=["POST"])
def gerar_entrevista(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    try:
        req_body = req.get_json()
    except ValueError:
        return func.HttpResponse("Payload inválido, envie um JSON", status_code=400)

    # Verifica se a chave "perfil" está presente
    perfil = req_body.get("perfil")
    if not perfil:
        return func.HttpResponse("Campo 'perfil' não encontrado no payload", status_code=400)

    try:
        # retorna as perguntas para entrevista (usa o perfil e manda prompt para openia)
        openai_client = AzureOpenAI(
            azure_endpoint=endpoint_openia,
            api_key=openia_api_key,
            api_version="2024-05-01-preview",  
        )

        logging.info("Client OpenAI criado com sucesso")

        payload = [
            {
                "role": "system",
                "content": 'You are a career coach specialized in inclusion and an experienced recruiter, focused on assisting people with disabilities in securing job opportunities. Your task is to help me analyze the JSON resume and develop a questionnaire simulating a technical interview, considering:Objective:Create a personalized interview questionnaire for candidates with disabilities aimed at highlighting talents and areas for improvement.Parts of the Questionnaire:Relevant Questions: Develop a questionnaire with the 10 most relevant questions aligned with the job profile and candidates backgrounds.Evaluation Objective: For each question, state the recruiters objective and the specific aspects they intend to assess, such as technical competencies, interpersonal skills, adherence to company values, and adaptability.Expected Responses: Provide exemplary responses or suggestions on how the candidate can answer effectively to stand out as a professional, considering their specific skills and experiences.Question Formats:Questions about previous experiences, challenges overcome with the inclusion of disabilitySimulations of solving technical or situational problemsDiscussions on innovations or improvements suggested in past rolesAdditional Guidelines:Ensure the questions are sensitive and inclusive, respecting limitations and the availability of accommodations in the workplace.Provide space for the candidate to highlight unique skills or diverse experiences that may contribute to the potential of the position in question.Ensure the proposed responses reinforce the strengths identified in the resume and demonstrate singular adaptations or achievements relevant to the work in the desired environment.Formatting the ResultMarkdown: Use markdown tags to provide the result in an organized and easy-to-read format on a webpage:Headings: Use ### for main sections.Lists: Employ bullet points to highlight items in each category.Emphasis: Apply emphasis to highlight critical points.'
            },
            {
                "role": "user",
                "content": json.dumps(perfil, ensure_ascii=False)  # Garante que os caracteres acentuados sejam preservados corretamente
            }
        ]

        # Chamando a API 
        completion = openai_client.chat.completions.create(
            model="connectia-gpt-4o",
            messages=payload,
            max_tokens=2025,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,  
            presence_penalty=0,
            stop=None,  
            stream=False 
        )

        return func.HttpResponse(completion.choices[0].message.content, status_code=200)

    except Exception as e:
        logging.error(f"Erro ao gerar entrevista: {e}")
        return func.HttpResponse("Erro ao gerar entrevista.", status_code=500)

@app.route(route="chat", methods=["POST"])
def chat(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Python HTTP trigger function processed a request.")

    # Verifica se o payload é json
    try:
        req_body = req.get_json()
    except ValueError:
        return func.HttpResponse("Payload inválido, envie um JSON", status_code=400)

    # Verifica se a chave "chat" está presente
    chat = req_body.get("chat")
    if not chat:
        return func.HttpResponse("Campo 'chat' não encontrado no payload", status_code=400)

    # Verifica se a chave "perfil" está presente
    perfil = req_body.get("perfil")
    if not perfil:
        return func.HttpResponse("Campo 'perfil' não encontrado no payload", status_code=400)

    try:
        # retorna a proxima mensagem do chat
        openai_client = AzureOpenAI(
            azure_endpoint=endpoint_openia,
            api_key=openia_api_key,
            api_version="2024-05-01-preview",  
        )

        logging.info("Client OpenAI criado com sucesso")
        print(chat)
        # chat possui a estrutura {"role": "agent" ou "user", "content": "mensagem"}, vamos adicionar o chat ao payload, mantendo a primeira mensagem de system.
        payload = [
            {
                "role": "system",
                "content": f'Você é um recrutador experiente orientando candidados e outros recrutadores em um chat (limite a resposta em 500 caracteres), com base no perfil fornecido em JSON: {perfil}'
            }
        ] + chat
        print(payload)
        logging.info(f"Payload: {payload}")

        # chama a API 
        completion = openai_client.chat.completions.create(
            model="connectia-gpt-4o",
            messages=payload,
            max_tokens=2025,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,  
            presence_penalty=0,
            stop=None,  
            stream=False 
        )

        return func.HttpResponse(completion.choices[0].message.content, status_code=200)

    except Exception as e:
        logging.error(f"Erro ao gerar resposta para o chat: {e}")
        return func.HttpResponse("Erro ao gerar resposta para o chat.", status_code=500)

