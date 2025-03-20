import { FormEvent, useState } from "react"
import { IoIosSend } from "react-icons/io";

interface Props {
  onSendMessage: (message: string) => void
  placeholder?: string
  disableCorrections?: boolean
  resumeReady: boolean
}

export const TextMessageBox = ({ onSendMessage, placeholder, disableCorrections = false, resumeReady = false }: Props) => {
  const [message, setMessage] = useState("")

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (message.trim().length == 0) return

    onSendMessage(message)
    setMessage("")
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-gray-200 w-full px-4"
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            name="message"
            autoFocus
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-x-indigo-300 pl-4 h-10"
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
        <button className={`flex justify-between items-center px-8 py-2 rounded-xl ${!resumeReady ? 'bg-gray-400' : 'bg-custom-blue'}`} disabled={!resumeReady}>
          <span className="text-white mr-2">Send</span>
          <IoIosSend color="white" size={20} />
        </button>
      </div>
    </form>
  )
}
