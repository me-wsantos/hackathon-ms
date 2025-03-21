import axios from "axios";

export const chatService = async ({ chat, perfil }: any) => {

  try {
    const response = await axios.post("/api/chat", {chat, perfil}, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.status === 200) {
      const result = response.data;

      return { status: "success", data: result };
    } else {
      return { status: "fail", error: response.statusText };
    }

  } catch (error) {
    return { ok: false, error }
  }

}