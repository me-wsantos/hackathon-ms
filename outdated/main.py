from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import aiofiles
import pyodbc
import openai
from azure.ai.formrecognizer import DocumentAnalysisClient
from azure.core.credentials import AzureKeyCredential

# Configurações do Azure
DOCUMENT_INTELLIGENCE_ENDPOINT = os.getenv("DOCUMENT_INTELLIGENCE_ENDPOINT")
DOCUMENT_INTELLIGENCE_KEY = os.getenv("DOCUMENT_INTELLIGENCE_KEY")
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY")
SQL_CONNECTION_STRING = os.getenv("SQL_CONNECTION_STRING")

# Inicialização do FastAPI
app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Altere para o domínio do seu front-end
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

document_client = DocumentAnalysisClient(
    endpoint=DOCUMENT_INTELLIGENCE_ENDPOINT,
    credential=AzureKeyCredential(DOCUMENT_INTELLIGENCE_KEY)
)
openai.api_key = AZURE_OPENAI_KEY


def save_to_db(data):
    try:
        conn = pyodbc.connect(SQL_CONNECTION_STRING)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO candidatos (nome, email, telefone, github, skills, status)
            VALUES (?, ?, ?, ?, ?, ?)
        """, data["nome"], data["email"], data["telefone"], data["github"], data["skills"], data["status"])
        conn.commit()
        conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    try:
        file_path = f"temp_{file.filename}"
        async with aiofiles.open(file_path, 'wb') as out_file:
            content = await file.read()
            await out_file.write(content)

        # Extrair informações do currículo
        with open(file_path, "rb") as f:
            poller = document_client.begin_analyze_document("prebuilt-resume", document=f)
            result = poller.result()
        os.remove(file_path)

        # Extração de dados com segurança
        extracted_data = {
            "nome": result.fields.get("Name").value if "Name" in result.fields else "",
            "email": result.fields.get("Email").value if "Email" in result.fields else "",
            "telefone": result.fields.get("PhoneNumber").value if "PhoneNumber" in result.fields else "",
            "github": result.fields.get(
                "Website").value if "Website" in result.fields and "github.com" in result.fields.get(
                "Website").value else "",
            "skills": result.fields.get("Skills").value if "Skills" in result.fields else "",
        }

        # Analisar com OpenAI
        prompt = f"""
        Avalie o currículo do candidato com as seguintes informações:
        Nome: {extracted_data["nome"]}
        E-mail: {extracted_data["email"]}
        Telefone: {extracted_data["telefone"]}
        GitHub: {extracted_data["github"]}
        Skills: {extracted_data["skills"]}

        O candidato está apto para um cargo em tecnologia? Se não, quais cursos ou treinamentos ele deveria fazer?
        """

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": "Você é um avaliador de currículos."},
                      {"role": "user", "content": prompt}]
        )

        analysis_result = response["choices"][0]["message"]["content"].strip()
        extracted_data["status"] = analysis_result

        save_to_db(extracted_data)

        return {"extracted_data": extracted_data, "analysis": analysis_result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/candidatos/")
def listar_candidatos():
    try:
        conn = pyodbc.connect(SQL_CONNECTION_STRING)
        cursor = conn.cursor()
        cursor.execute("SELECT id, nome, email, telefone, github, skills, status FROM candidatos")
        candidatos = [
            {"id": row[0], "nome": row[1], "email": row[2], "telefone": row[3], "github": row[4], "skills": row[5],
             "status": row[6]}
            for row in cursor.fetchall()
        ]
        conn.close()
        return {"candidatos": candidatos}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
