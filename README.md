# Connection.ai - Inteligência Artificial para Recrutamento e Desenvolvimento Profissional

![capa](https://github.com/devcaiada/connection.ai/blob/main/assets/capa.jpg?raw=true)

A *Connection.ai* é uma inovadora plataforma de inteligência artificial destinada a transformar a forma como analisamos currículos e preparamos candidatos para o mercado de trabalho. O projeto é guiado pelos princípios de **imparcialidade e inclusividade**, garantindo que todos os candidatos sejam avaliados de forma justa e equitativa, sem distinção com base em deficiência ou qualquer outro critério discriminatório.

Os sistemas de IA da *Connection.ai* são desenvolvidos para tratar todos de forma justa, garantindo que candidatos com qualificações, experiências e competências semelhantes recebam as mesmas recomendações e oportunidades, promovendo um ambiente de recrutamento mais acessível e justo.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="35" height="35" /> Escopo do Projeto
### **1. Análise Curricular Automatizada**
- Os usuários poderão fazer upload dos currículos, que serão analisados pela IA para identificar habilidades, experiências e lacunas de competências.
- Com base na análise, será gerado um plano de desenvolvimento individual, destacando áreas de melhoria e sugerindo cursos e certificações necessárias para impulsionar a carreira.

### **2. Simulação de Entrevista Personalizada**
- A IA criará simulados de entrevista baseados no perfil do candidato e nos requisitos da vaga desejada, proporcionando uma experiência de entrevista prática e focada.
- Feedback em tempo real será oferecido, permitindo aos candidatos ajustarem suas respostas e abordagens antes de uma entrevista real.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" width="35" height="35" /> Arquitetura do Projeto

![arquitecture](https://github.com/devcaiada/connection.ai/blob/main/assets/arquitecture.png?raw=true)

A solução é composta pelos seguintes componentes principais:

### **Frontend**
- Desenvolvido em **Next.js**.
- Implementado como um **Azure Static Web App**.
- Interface para upload de currículos e visualização das análises e entrevistas.

### **Backend**
- Construído em **Python**.
- Responsável pelo processamento dos currículos e geração de entrevistas personalizadas.
- Utiliza **Azure Functions** para processamento assíncrono.

### **Serviços Utilizados**
1. **Document Intelligence (Azure AI Services)**
   - Extrai informações estruturadas dos currículos em PDF.
   - Utiliza um modelo personalizado para interpretar dados relevantes.

2. **Azure OpenAI**
   - Analisa o perfil dos candidatos e sugere cursos.
   - Gera perguntas e conduz a simulação de entrevistas.
   - Fornece feedback automatizado em tempo real.

3. **Azure Storage**
   - Armazena temporariamente os arquivos de currículo para processamento pelo Document Intelligence.

4. **Azure Functions**
   - Executa o processamento assíncrono dos currículos e a geração de entrevistas personalizadas.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Flying%20Saucer.png" alt="Flying Saucer" width="35" height="35" /> Tecnologias Utilizadas
- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS para estilização.
- **Prisma**: ORM para banco de dados.
- **Azure Storage Blob**: Serviço de armazenamento de blobs da Azure.
- **OpenAI**: API para integração com modelos de linguagem.
- **Axios**: Cliente HTTP para fazer requisições.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Light Bulb" width="30" height="30" /> Funcionalidades
- **Análise de Currículos**: Upload de currículos em formatos PDF, PNG, JPG e JPEG para análise.
- **Chatbot**: Assistente virtual para responder perguntas sobre análise de currículos.
- **Análise de Dados**: Ferramentas para análise de folhas de pagamento e identificação de discrepâncias.
- **Perfil do Candidato**: Visualização de informações detalhadas sobre o candidato, incluindo habilidades e experiências profissionais.

![front](https://github.com/devcaiada/connection.ai/blob/main/assets/front.png?raw=true)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ferris%20Wheel.png" alt="Ferris Wheel" width="40" height="40" /> Fluxo de Funcionamento
1. **Upload do currículo** via frontend.
2. **Armazenamento temporário no Azure Storage**.
3. **Processamento pelo Document Intelligence**, que extrai os dados estruturados.
4. **Envio direto dos dados extraídos para o Azure OpenAI**, sem persistência em banco de dados.
5. **Geração de insights e feedback sobre o currículo**.
6. **Criação de simulação de entrevista personalizada** com base no perfil do candidato.
7. **Retorno das informações** para o frontend.

### **Estrutura de Diretórios**
```
app/        -> Contém os componentes, contextos, dados, fontes, interfaces, serviços e utilitários da aplicação.
api/        -> Contém as rotas da API para diferentes funcionalidades como análise de dados e upload de currículos.
components/ -> Contém os componentes React utilizados na aplicação.
context/    -> Contém o contexto da aplicação para gerenciamento de estado.
data/       -> Contém recursos de análise de dados.
fonts/      -> Contém as fontes utilizadas na aplicação.
interfaces/ -> Contém as interfaces TypeScript utilizadas na aplicação.
services/   -> Contém os serviços para comunicação com APIs e outras funcionalidades.
utils/      -> Contém utilitários para manipulação de dados.
prisma/     -> Contém o esquema do banco de dados Prisma.
public/     -> Contém arquivos públicos como imagens.
```

### **Scripts Disponíveis**
- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Cria o build de produção da aplicação.
- `npm start`: Inicia a aplicação em modo de produção.
- `npm run lint`: Executa o linter para verificar problemas no código.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Spiral%20Calendar.png" alt="Spiral Calendar" width="35" height="35" /> Presentation

Acompanhe nosso  vídeo demonstrativo e vejo ao vivo todas as funcionalidades dessa poderosa ferramenta - **Connection.ai**.

<p align="center">
  <a href="https://www.youtube.com/watch?v=v6kudNNhla0&ab_channel=CaioArruda">
    <img src="https://github.com/devcaiada/connection.ai/blob/main/assets/capa.png?raw=true" alt="Youtube">
  </a>
</p>


Power Point de apresentação:

[![ppt](https://github.com/devcaiada/connection.ai/blob/main/assets/power-point-readme.png?raw=true)](https://github.com/devcaiada/connection.ai/raw/refs/heads/main/ppt/Connection.ai.pptx)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium%20Skin%20Tone.png" alt="Man Technologist Medium Skin Tone" width="35" height="35" /> Como Executar o Projeto

### **Pré-requisitos**
- Conta na **Azure** com acesso ao **Azure OpenAI, Document Intelligence e Storage**.
- **Node.js** e **Next.js** instalados para rodar o frontend.
- **Python 3.8+** e **Azure Functions Core Tools** para o backend.

### **Configuração e Deploy**
1. Configure as variáveis de ambiente no **.env** com as credenciais do Azure.

2. Instale as dependências do backend:
   ```bash
   pip install -r requirements.txt
   ```

3. Inicie o backend localmente:
   ```bash
   func start
   ```

4. Instale e execute o frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. Realize o deploy para o Azure (Opcional):
   ```bash
   az webapp up --name NomeDoApp
   ```


### **Contato** <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png" alt="Love Letter" width="25" height="25" />
Para dúvidas ou sugestões, entre em contato com a gente.

| Caio Arruda  | Victor La Corte  | Wellington Santos  |
|:-----------:|:-----------:|:-----------:|
|[![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devcaiada)    | [![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-la-corte-348b81250/) | [![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-wellington-santos/) |

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="35" height="35" /> Contribuição 

Sinta-se à vontade para contribuir com este repositório. Abra uma issue ou envie um pull request com suas sugestões e melhorias.

<br></br>

**Se este projeto foi útil para você, deixe uma estrela! Isso nos ajuda muito.** <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" />
