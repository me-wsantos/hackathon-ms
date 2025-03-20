"use client"
import useAppContext from "../context/appContext";
import { GptMessage, MyMessage, GptMessageAnalysis, TextMessageBox } from "./"
import { chatService } from "../services";
import { IMessage } from "../interfaces";
import { UploadResume } from "./";
import { TypingLoader } from "./loaders/TypingLoader";

export const ChatContainer = () => {
  const { messages, setMessages, isLoading, setIsLoading, isUploaded } = useAppContext();

  const handlePost = async (text: string) => {
    setIsLoading(true)
    setMessages((prev: IMessage[]) => [...prev, { text, isGpt: false }])

    const { data } = await chatService({ prompt: text })

    if (data == undefined) {
      setMessages((prev: IMessage[]) => [...prev, {
        text: "Sorry, it was not possible to answer your question. Please try again.",
        isGpt: true
      }])
    } else {
      setMessages((prev: IMessage[]) => [...prev, { text: data, isGpt: true }])
    }
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl bg-white h-[calc(100vh-150px)] p-4 border">
      <div>
        <UploadResume />
      </div>
      <div className="chat-messages">
        <div className="flex flex-col">
          <GptMessage text="Hello! Please upload a resume so I can analyze it." />

          {isUploaded && (
            <GptMessage text={`I have received your resume. How can I help you?`} />
          )
          }

          {
            messages.map((message, index) => (
              message.isGpt
                ? (message.isAnalysis ? <GptMessageAnalysis key={index} /> : <GptMessage key={index} text={message.text} />)
                : (<MyMessage key={index} text={message.text} />)
            ))
          }

          {
            isLoading && (
              <TypingLoader className="fade-in" />
            )
          }
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
