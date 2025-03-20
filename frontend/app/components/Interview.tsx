"use client"
import useAppContext from "../context/appContext";
import { GoChecklist } from "react-icons/go";
import { useEffect, useState } from "react";

interface Props {
  Perguntas: string[]
}

export const Interview = () => {
  const [questions, setQuestions] = useState<any[]>([])
  const { interview } = useAppContext();

  useEffect(() => {
    let objQuestion = {} as Props

    if (typeof interview === "string") {
      let cleanedString = "";

      if (interview) {
        cleanedString = String(interview).replace(/```json\s*/g, "").replace(/```$/, "");

        objQuestion = JSON.parse(cleanedString)

      }
    } else if (typeof interview === "object") {
      objQuestion = interview
    }


    if (objQuestion != null) {
      const { Perguntas } = objQuestion

      if (Perguntas && Perguntas.length) {
        const arrayQuestions = Perguntas.toString().split("?,")
        setQuestions(arrayQuestions)
      }
    }

  }, [interview]);

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
                {
                  questions.map((item: string, i: number) => (
                    <div
                      key={i}
                      className={`w-full py-8 ${i > 0 ? 'border-t-2' : ''}`}
                    >
                      <span className="font-bold">{i + 1}</span> - {item}{item.endsWith("?") ? "" : "?"}
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
