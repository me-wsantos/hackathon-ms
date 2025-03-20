// role: Assistant

export const ChatbotAgent = async (prompt: string) => {
  const llm = "gpt-4o-mini";
  const backstory = `Você é um coach de carreira especializado em inclusão e um recrutador experiente, com foco em apoiar pessoas com deficiência na obtenção de oportunidades de emprego.`;
  const goal = `Analise a pergunta do usuário e retorne o resultado mais confiável possível. Retorne o resultado no formato Markdown.`;

  try {
    const agentObjective = backstory + " " + goal;
    //const url = "/api/ai/request-azure";
    const url = "/api/ai/request-gemini";

    const result: any = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ llm, agentObjective, prompt })
    })

    const response = await result.json();

    if (!response.ok) {
      return {
        ok: false,
        data: {
          status: response.status,
          message: "O assistente não conseguiu responder a pergunta. Tente novamente"
        }
      }
    }

    return response

  } catch (error) {
    return { ok: false, message: "O assistente não conseguiu responder a pergunta. Tente novamente.", error }
  }
}