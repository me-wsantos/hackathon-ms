"use client"
import useAppContext from "../context/appContext";
import { SlGraph } from "react-icons/sl";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const CareerPlan = () => {
  const { careerPlan } = useAppContext();

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl h-[calc(100vh-150px)] p-4">
      <div className="upload-section">
        <div className="h-auto flex flex-col p-0 w-100">
          <section className="h-full flex flex-col justify-start">
            <div className="h-full pb-0 flex justify-start items-end border-b-2">
              <SlGraph size={35} color={"#000"} className="mr-4 mb-[.4rem]" />
              <div
                className="w-full p-0 text-custom-blue-100 text-xl items-end leading-normal font-bold text-start md:text-2xl">
                Career Plan
              </div>
            </div>
            <div className="max-w-full flex mt-8">
              <div className="max-w-full pr-12">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {careerPlan}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
