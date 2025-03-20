import axios from "axios";

export const interviewService = async (perfil: any) => {
  try {
    const response = await axios.post("/api/interview", {perfil}, {
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