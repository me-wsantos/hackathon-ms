# Connection.ai - Inteligência Artificial para Recrutamento e Desenvolvimento Profissional

![capa](https://github.com/devcaiada/connection.ai/blob/main/assets/capa.jpg?raw=true)

A Connection.ai é uma plataforma inovadora de inteligência artificial dedicada a transformar a maneira como pessoas com deficiência são preparadas e conectadas a oportunidades de emprego apoiado. Nosso objetivo é superar barreiras e promover a inclusão no mercado de trabalho, garantindo que cada indivíduo receba o suporte necessário para alcançar o sucesso profissional.

### **Princípios fundamentais:**
- **Inclusão**: Desenvolvemos soluções que consideram as necessidades específicas de pessoas com deficiência, desde a análise de habilidades e interesses até a identificação de oportunidades de emprego adequadas.
- **Personalização**: Oferecemos suporte individualizado, incluindo orientação profissional, treinamento de habilidades e acompanhamento contínuo, para garantir que cada pessoa tenha as ferramentas e o apoio necessários para prosperar.
- **Empoderamento**: Acreditamos no potencial de cada indivíduo e nos esforçamos para criar um ambiente onde pessoas com deficiência possam alcançar sua independência e realizar seus objetivos de carreira.
- **Transparência**: As decisões e recomendações geradas pela IA são claras e compreensíveis, permitindo que os usuários entendam como chegamos a determinados resultados.
- **Justiça e Imparcialidade**: Nossos algoritmos são projetados para evitar vieses discriminatórios, garantindo que todos os candidatos sejam avaliados de forma justa e equitativa, independentemente de sua deficiência ou outras características pessoais.
- **Privacidade e Segurança**: Protegemos os dados pessoais dos usuários com as mais rigorosas medidas de segurança e privacidade, garantindo que suas informações sejam usadas de forma ética e responsável.
- **Responsabilidade**: Assumimos a responsabilidade pelo impacto de nossas soluções de IA na vida das pessoas, monitorando continuamente nossos sistemas para garantir que eles estejam alinhados com nossos princípios e valores.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="35" height="35" /> Nossas soluções
### **1. Extração Inteligente de Currículos (Azure Document Intelligence)**
- Utilizamos o Azure Document Intelligence para extrair informações cruciais de currículos de forma rápida e precisa.
- Isso reduz significativamente o tempo de análise de currículos, garante que nenhum talento seja negligenciado e permite uma correspondência mais eficiente entre candidatos e vagas. Essa automatização assegura uma análise imparcial, focando nas qualificações e experiências relevantes.

### **2. Plano de Carreira Personalizado**
- O sistema realiza uma análise SWOT (Forças, Fraquezas, Oportunidades e Ameaças) detalhada do candidato.
- Essa análise fornece uma visão clara das competências do candidato e das áreas que precisam de desenvolvimento. O plano de carreira resultante é um guia estratégico para o crescimento profissional, ajudando o indivíduo a focar em suas metas e a superar desafios. Isso aumenta a autoconfiança e a motivação, essenciais para uma trajetória de sucesso.

### **3. Questionário de Entrevista Personalizado**
- O sistema gera um questionário de entrevista sob medida para auxiliar o treinador a conduzir entrevistas mais eficazes.
- O questinário ajuda a identificar talentos únicos e áreas de melhoria específicas para cada candidato.
- O questionário personalizado permite uma avaliação mais completa e justa, garantindo que o candidato tenha a oportunidade de destacar suas habilidades e experiências relevantes. Isso facilita a criação de planos de desenvolvimento individualizados e o acompanhamento do progresso do candidato.

### **4. ChatBot**
- Uma ferramenta de chat inteligente que auxilia o treinador a obter informações rápidas e personalizados sobre o candidato.
- Esse assistente responde a perguntas específicas sobre o perfil do candidato, como habilidades, experiências e áreas de interesse, com base nas informações extraídas do currículo e de outras fontes de dados.
- Isso economiza tempo do treinador, permitindo que ele se concentre em aspectos mais estratégicos do processo de recrutamento e desenvolvimento. Além disso, o ChatBot pode fornecer insights adicionais que poderiam passar despercebidos em uma análise manual.
  
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" width="35" height="35" /> Arquitetura do Projeto

![arquitecture](https://github.com/devcaiada/connection.ai/blob/main/assets/arquitecture.png?raw=true)

A solução é composta pelos seguintes componentes principais:

### **Frontend**
- Desenvolvido em **Next.js**.
- Implementado como um **Azure Static Web App**.
- Interface para upload de currículos e visualização das análises e entrevistas.

### **Backend**
- Construído em **Python**.
- Responsável por atender as requisições para extração de dados dos currículos, geração de plano de carreira e questionário de entrevista.
- Utiliza **Azure Functions** para processamento assíncrono.

### **Serviços Utilizados**
1. **Document Intelligence (Azure AI Services)**
   - Extrai informações estruturadas dos currículos em PDF.
   - Utiliza um modelo personalizado neural para extrair dados relevantes.

2. **Azure OpenAI**
   - Analisa o perfil dos candidatos e gera um plano de carreira personalizado.
   - Gera um questionário de entrevista baseado no perfil do candidato contribuindo na condução de entrevistas técnicas.
   - Interaje com o treinador respondendo perguntas sobre o candidato através de um chat.

3. **Azure Storage**
   - Armazena os arquivos de currículo para processamento pelo Document Intelligence.

4. **Azure Functions**
   - Executa o processamento assíncrono dos currículos e a geração de plano de carreira e questionário de entrevistas.

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
