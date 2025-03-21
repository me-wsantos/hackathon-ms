"use client"
import useAppContext from "../context/appContext";
import { GoChecklist } from "react-icons/go";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Interview = () => {
  const { interview } = useAppContext();

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl h-[calc(100vh-150px)] p-4">
      <div className="upload-section ">
        <div className="h-auto flex flex-col p-0 w-100">
          <section className="h-full flex flex-col justify-start">
            <div className="h-full pb-0 flex justify-start items-end border-b-2">
              <GoChecklist size={35} color={"#000"} className="mr-4 mb-0" />
              <div
                className="w-full p-0 text-custom-blue-100 text-xl items-end leading-normal font-bold text-start md:text-2xl">
                Interview Questionnaire
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-full pr-0">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {interview}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
