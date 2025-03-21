"use client"
import { useEffect, useRef } from "react";
import useAppContext from "../context/appContext";
import { GptMessage, MyMessage, TextMessageBox } from "./"
import { chatService } from "../services";
import { IMessage } from "../interfaces";
import { UploadResume } from "./";
import { TypingLoader } from "./loaders/TypingLoader";

export const ChatContainer = () => {
  const { isLoading, setIsLoading, isUploaded, chatMessages, setChatMessages, profile } = useAppContext();

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current as HTMLDivElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [chatMessages]);

  const handlePost = async (text: string) => {
    setIsLoading(true);

    // Adiciona a mensagem do usuário
    const newUserMessage = { role: "user", content: text };
    const updatedMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedMessages);

    try {
      const { data } = await chatService({ chat: updatedMessages.slice(1), perfil: profile });

      if (data && data.status !== "fail") {
        const newAssistantMessage = {
          role: "assistant",
          content: data.response.content
        };

        setChatMessages((prev: any) => [...prev, newAssistantMessage]);
      } else {
        const errorMessage = {
          role: "assistant",
          content: "Sorry, it was not possible to answer your question. Please try again."
        };
        setChatMessages((prev: any) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error in chat service:", error);
      const errorMessage = {
        role: "assistant",
        content: "An error occurred. Please try again later."
      };
      setChatMessages((prev: any) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl bg-white h-[calc(100vh-150px)] p-4 border">
      <div>
        <UploadResume />
      </div>
      
      <div 
        className={`${isUploaded ? 'mt-0' : 'mt-24 lg:mt-6' } chat-messages`}
        ref={scrollContainerRef}
      >
        <div className="flex flex-col">


          {chatMessages.map((message: IMessage, index: number) => (
            message.role === "assistant"
              ? <GptMessage key={index} text={message.content} />
              : <MyMessage key={index} text={message.content} />
          ))}

          {isLoading && (
            <TypingLoader className="fade-in" />
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder={isUploaded ? "Type your message..." : "Upload resume"}
        disableCorrections
        resumeReady={isUploaded}
      />
    </div>
  )
}