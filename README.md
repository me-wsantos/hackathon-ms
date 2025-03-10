# Hackaton Microsoft Innovation Challenge March 2025

![capa](https://github.com/devcaiada/hackathon-ms/blob/main/assets/intro_azure.png?raw=true)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Pushpin.png" alt="Pushpin" width="35" height="35" /> About the Project
This project was developed for Microsoft's Hackathon, in the "AI for Supported Employment Job Coaches" category. The goal is to use artificial intelligence to assist job coaches who support individuals with disabilities or other employment barriers in entering the workforce.

Job coaches play a crucial role in guiding these individuals through job applications, skill development, and workplace integration. However, their resources are often limited, and administrative tasks take up significant time. This application helps job coaches by automating resume analysis, recommending courses to enhance candidates' qualifications, and providing an AI-driven interview process to improve efficiency and fairness in hiring.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="35" height="35" /> Technologies Used

- **Azure Document Intelligence**: Extracts key information from uploaded resumes.
- **Azure SQL Database (Free Tier)**: Stores extracted candidate information.
- **Azure Blob Storage**: Uploads and stores resumes remotely.
- **Azure OpenAI**: Analyzes the resume, suggests courses, and conducts virtual interviews.
- **FastAPI (Python)**: Backend to process requests and manage service communication.
- **Next.js**: Frontend for user interface.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ferris%20Wheel.png" alt="Ferris Wheel" width="40" height="40" /> Application Workflow

1. **Resume Upload**
   - The candidate uploads their resume.
   - The file is stored in **Azure Blob Storage** to obtain a public URL.
   
2. **Information Extraction**
   - The document's URL is sent to **Azure Document Intelligence**.
   - The model extracts key information such as **name, email, phone number, skills, and GitHub profile**.
   - The extracted data is stored in **Azure SQL Database**.
   
3. **AI-Powered Evaluation**
   - **Azure OpenAI** evaluates the information and determines if the candidate is suitable for a job or requires further qualifications.
   - If necessary, OpenAI suggests relevant courses to enhance the candidate’s skills.
   
4. **Automated Interview**
   - OpenAI conducts a **virtual interview** with predefined questions.
   - The candidate responds, and the model decides if they pass or need further development.
   
5. **Final Decision**
   - If approved, the process is completed, and the candidate is ready for employment opportunities.
   - If not approved, additional courses are suggested, and the candidate can retry.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="35" height="35" /> How This Project Supports Inclusive Employment
This project directly addresses the challenges faced by individuals with disabilities in securing employment by:
- **Reducing Bias**: AI-driven evaluation ensures a fairer selection process based on skills rather than subjective biases.
- **Enhancing Accessibility**: Automating resume analysis and interview processes allows candidates with disabilities to go through a structured and inclusive hiring experience.
- **Improving Efficiency**: Job coaches can spend more time on personalized coaching rather than manual screening and administrative work.
- **Personalized Training Paths**: AI-generated recommendations guide candidates toward specific skills required for employment, increasing their chances of success.
- **Supporting Diverse Industries**: The system helps candidates find job opportunities in retail, administration, healthcare, IT, food services, and manufacturing by matching their skills with market demands.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium%20Skin%20Tone.png" alt="Man Technologist Medium Skin Tone" width="35" height="35" /> How to Run the Project

### **1. Configure Azure Credentials**
Before starting, set up your credentials in the **.env** file:
```
DOCUMENT_INTELLIGENCE_ENDPOINT=<your_endpoint>
DOCUMENT_INTELLIGENCE_KEY=<your_key>
AZURE_OPENAI_ENDPOINT=<your_endpoint>
AZURE_OPENAI_KEY=<your_key>
SQL_CONNECTION_STRING=<connection_string>
AZURE_STORAGE_ACCOUNT=<storage_account_name>
AZURE_STORAGE_KEY=<storage_key>
```

### **2. Install Dependencies**
```
pip install -r requirements.txt
```

### **3. Start the Backend**
```
uvicorn main:app --reload
```

### **4. Start the Frontend**
```
npm install
npm run dev
```

## 📈 Future Enhancements
- Improve the interview model with more personalized feedback.
- Develop a dashboard for job coaches to track candidate progress.
- Integrate with online course platforms to streamline candidate training enrollment.

---
This project demonstrates how AI can transform inclusive hiring, enhance the efficiency of job coaches, and provide equitable employment opportunities for individuals with disabilities.

Leave us a <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="20" height="20" />!


