"use client"
import { FormEvent, useState } from "react"
import useAppContext from "../context/appContext";
import { IoIosSend } from "react-icons/io";

interface Props {
  onSendMessage: (message: string) => void
  placeholder?: string
  disableCorrections?: boolean
  resumeReady: boolean
}

export const TextMessageBox = ({ onSendMessage, placeholder, disableCorrections = false, resumeReady = false }: Props) => {
  const [message, setMessage] = useState("");
  const { setChatMessages } = useAppContext();

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Adiciona a mensagem do usuário ao array chatMessages
    const newUserMessage = {
      role: "user",
      content: message.trim()
    };

    setChatMessages((prevMessages: any) => [...prevMessages, newUserMessage]);

    // Chama a função onSendMessage passada como prop
    onSendMessage(message.trim())

    // Limpa o campo de mensagem
    setMessage("")
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-12 rounded-xl bg-gray-200 w-full px-0"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            name="message"
            autoFocus
            className="flex w-full border rounded-xl text-sm text-gray-800 focus:outline-none focus:border-x-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={!resumeReady}
          />
        </div>
      </div>

      <div className="ml-4">
        <button
          type="submit"
          className={`flex justify-between items-center py-2 px-3 rounded-xl ${!resumeReady ? 'bg-gray-400' : 'bg-custom-blue '} lg:px-8`}
          disabled={!resumeReady}
        >
          <span className="text-white mr-2 text-sm">Send</span>
          <IoIosSend color="white" size={20} />
        </button>
      </div>
    </form>
  )
}
