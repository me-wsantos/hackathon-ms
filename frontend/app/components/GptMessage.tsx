import { useEffect, useState } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { remark } from "remark";
import html from 'remark-html';

interface Props {
  text: string
}

export const GptMessage = ({ text }: Props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    processContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const processContent = async () => {
    const data = await remark()
      .use(html)
      .process(text);

    setContent(data.toString())
  }

  return (
    <div className="col col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-custom-blue flex-shrink-0 text-white text-x">
          <RiRobot2Line size={20} />
        </div>

        <div
          className="relative ml-3 text-sm bg-gray-100 py-2 px-4 shadow rounded-xl"
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
      </div>
    </div>
  )
}
