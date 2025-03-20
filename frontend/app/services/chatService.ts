"use client"
import { ChatbotAgent } from "../agents";

export const chatService = async ({ prompt }: any) => {
  const restult = await ChatbotAgent(prompt);

  return restult;

}