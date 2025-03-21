# Connection.ai - Artificial Intelligence for Recruitment and Professional Development

![capa](https://github.com/devcaiada/connection.ai/blob/main/assets/capa.jpg?raw=true)

Connection.ai is an innovative artificial intelligence platform dedicated to transforming the way people with disabilities are prepared and connected to supported employment opportunities. Our goal is to overcome barriers and promote inclusion in the labor market, ensuring that each individual receives the necessary support to achieve professional success.

### **Fundamental principles:**
- **Inclusion**: We develop solutions that consider the specific needs of people with disabilities, from the analysis of skills and interests to the identification of suitable employment opportunities.
- **Personalization**: We offer individualized support, including professional guidance, skills training, and continuous monitoring, to ensure that each person has the tools and support needed to thrive.
- **Empowerment**: We believe in the potential of each individual and strive to create an environment where people with disabilities can achieve their independence and realize their career goals.
- **Transparency**: The decisions and recommendations generated by AI are clear and understandable, allowing users to understand how we arrived at certain results.
- **Justice and Impartiality**: Our algorithms are designed to avoid discriminatory biases, ensuring that all candidates are evaluated fairly and equitably, regardless of their disability or other personal characteristics.
- **Privacy and Security**: We protect users' personal data with the most rigorous security and privacy measures, ensuring that their information is used ethically and responsibly.
- **Responsibility**: We take responsibility for the impact of our AI solutions on people's lives, continuously monitoring our systems to ensure they align with our principles and values.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="35" height="35" /> Our Solutions
### **1. Intelligent Resume Extraction (Azure Document Intelligence)**
- We use Azure Document Intelligence to extract crucial information from resumes quickly and accurately.
- This significantly reduces resume analysis time, ensures no talent is overlooked, and enables more efficient matching between candidates and jobs. This automation ensures impartial analysis, focusing on relevant qualifications and experiences.

### **2. Personalized Career Plan**
- The system performs a detailed SWOT (Strengths, Weaknesses, Opportunities, and Threats) analysis of the candidate.
- This analysis provides a clear view of the candidate's competencies and areas that need development. The resulting career plan is a strategic guide for professional growth, helping the individual focus on their goals and overcome challenges. This increases self-confidence and motivation, essential for a successful trajectory.

### **3. Personalized Interview Questionnaire**
- The system generates a customized interview questionnaire to assist the coach in conducting more effective interviews.
- The questionnaire helps identify unique talents and specific areas for improvement for each candidate.
- The personalized questionnaire allows for a more complete and fair assessment, ensuring that the candidate has the opportunity to highlight their relevant skills and experiences. This facilitates the creation of individualized development plans and the monitoring of the candidate's progress.

### **4. ChatBot Assistant**
- An intelligent chat tool that helps the coach obtain quick and personalized information about the candidate.
- This assistant answers specific questions about the candidate's profile, such as skills, experiences, and areas of interest, based on information extracted from the resume and other data sources.
- This saves the coach time, allowing them to focus on more strategic aspects of the recruitment and development process. In addition, the ChatBot can provide additional insights that could go unnoticed in a manual analysis.
  
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png" alt="Robot" width="35" height="35" /> Project Architecture

![arquitecture](https://github.com/devcaiada/connection.ai/blob/main/assets/arquitecture.png?raw=true)

The solution consists of the following main components:

### **Frontend**
- Developed in Next.js.
- Implemented as an Azure Static Web App.
- Interface for uploading resumes and viewing analyses and interviews.

### **Backend**
- Built in Python.
- Responsible for handling requests for extracting data from resumes, generating a career plan, and an interview questionnaire.
- Uses Azure Functions for asynchronous processing.

### **Services Used**
1. **Document Intelligence (Azure AI Services)**
   - Extracts structured information from resumes in PDF format.
   - Uses a custom neural model to extract relevant data.

2. **Azure OpenAI**
   - Analyzes the candidates profile and generates a personalized career plan.
   - Generates an interview questionnaire based on the candidate's profile contributing to the conduction of technical interviews.
   - Interacts with the trainer answering questions about the candidate through a chat.

3. **Azure Storage**
   - Stores resume files for processing by Document Intelligence.

4. **Azure Functions**
   - Executes the asynchronous processing of resumes and the generation of a career plan and interview questionnaire.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Flying%20Saucer.png" alt="Flying Saucer" width="35" height="35" /> Technologies Used
- **Azure Static Web App**: A service that automatically builds and deploys full-stack web apps to Azure from a GitHub repository.
- **Azure Storage**: Microsoft Azure's scalable and durable storage service for storing unstructured data.
- **Azure Functions**: Azure's serverless computing platform that allows you to run small pieces of code (functions) in response to events.
- **Azure API Management**: Azure service for publishing, securing, transforming, and analyzing APIs, enabling centralized management of access to back-ends and the creation of API gateways.
- **Azure Document Intelligence (formerly Azure Form Recognizer)**: Azure service that uses artificial intelligence to extract text, key-value pairs, tables, and document structures.
- **Azure OpenAI**: Azure service that provides access to OpenAI's advanced language models allowing the creation of artificial intelligence applications.
- **Azure Application Insights**: Azure application performance monitoring service, which collects telemetry data to identify bottlenecks, diagnose problems, and optimize the user experience.
- **Azure Key Vault**: Azure service for securely storing and managing secrets (passwords, API keys, certificates), controlling access and ensuring compliance with security policies.
- **Python**: High-level programming language, versatile and widely used in various areas, including web development, data analysis, and artificial intelligence.
- **Next.js**: React framework that offers structure and additional functionalities for the development of web applications, such as routing, server-side rendering, and performance optimizations.
- **React**: JavaScript library for building interactive and reusable user interfaces (UI), based on components.
- **TypeScript**: Superset of JavaScript that adds optional static typing, allowing error detection during development and improving code maintainability.
- ** Tailwind CSS**: Utility CSS framework that offers pre-defined classes for quick and consistent styling of HTML elements.
- **Axios**: Promise-based HTTP client for making requests to web services, supporting request cancellation, response interception, and protection against XSRF.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Light Bulb" width="30" height="30" /> Functionalities
- **Resume Analysis**: Upload resumes in PDF, PNG, JPG, and JPEG formats for analysis.
- **Chatbot**: Virtual assistant to answer questions about the candidate's profile.
- **Candidate Profile**: View detailed information about the candidate, including skills and professional experiences.
- **Career Plan**: Generation of a personalized career plan for the candidate.
- **Interview Questionnaire**: Generation of a personalized technical interview questionnaire.

![front](https://github.com/devcaiada/connection.ai/blob/main/assets/front.png?raw=true)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ferris%20Wheel.png" alt="Ferris Wheel" width="40" height="40" /> Operation Flow
1. **Upload the resume** via frontend.
2. **Temporary storage in Azure Storage**.
3. **Processing by Document Intelligence**, model trained to extract data in a structured way.
4. **Generation of the career plan** through the OpenAI service.
5. **Generation of the interview questionnaire** through the OpenAI service.
6. **Return of information** to the frontend.
7. **Interaction with chatbot** to answer questions about the candidate.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Spiral%20Calendar.png" alt="Spiral Calendar" width="35" height="35" /> Presentation

Follow our demonstration video and see live all the features of this powerful tool - **Connection.ai**.

<p align="center">
  <a href="https://www.youtube.com/watch?v=v6kudNNhla0&ab_channel=CaioArruda">
    <img src="https://github.com/devcaiada/connection.ai/blob/main/assets/capa.png?raw=true" alt="Youtube">
  </a>
</p>

Presentation

[![ppt](https://github.com/devcaiada/connection.ai/blob/main/assets/power-point-readme.png?raw=true)](https://github.com/devcaiada/connection.ai/raw/refs/heads/main/ppt/Connection.ai.pptx)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium%20Skin%20Tone.png" alt="Man Technologist Medium Skin Tone" width="35" height="35" /> How to Run the Project

### **Prerequisites**
- Azure account with access to Azure OpenAI, Document Intelligence, and Storage.
- Node.js and Next.js installed to run the frontend.
- Python 3.8+ and Azure Functions Core Tools for the backend.

### **Frontend**
- Follow the instructions in the [README do projeto](https://github.com/me-wsantos/hackathon-ms/tree/main/frontend#readme) to run the application.

### **Backend**
- Follow the instructions in the [README do projeto](https://github.com/me-wsantos/hackathon-ms/tree/main/backend#readme) to run the application.

### **Contact** <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png" alt="Love Letter" width="25" height="25" />
For questions or suggestions, please contact us.

| Caio Arruda  | Victor La Corte  | Wellington Santos  |
|:-----------:|:-----------:|:-----------:|
|[![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devcaiada)    | [![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-la-corte-348b81250/) | [![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-wellington-santos/) |

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="35" height="35" /> Contribution 

Feel free to contribute to this repository. Open an issue or submit a pull request with your suggestions and improvements.

**If this project was helpful to you, leave a star! This helps us a lot.** <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="25" height="25" />
