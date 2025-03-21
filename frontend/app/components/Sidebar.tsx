"use client"

import useAppContext from "../context/appContext";
import { SlGraph } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import { GoChecklist } from "react-icons/go";
import { MdOutlineUploadFile } from "react-icons/md";
import Loading from "./loading";

export const menuItems = [
  {
    icon: <HiOutlineHome size={28} className="mr-2 text-white mb-2" />,
    text: "Home"
  },
  {
    icon: <MdOutlineUploadFile size={28} className="mr-2 text-white mb-2" />,
    text: "Analyze resume"
  },
  {
    icon: <FaRegUser size={24} className="mr-2 text-white mb-2" />,
    text: "Candidate Profile"
  },
  {
    icon: <SlGraph size={26} className="mr-2 text-white mb-2" />,
    text: "Career Plan"
  },
  {
    icon: <GoChecklist size={26} className="mr-2 text-white mb-2" />,
    text: "Interview Questionnaire"
  }
]

export function Sidebar() {
  const {
    moduleActive,
    setModuleActive,
    loadingProfile,
    loadingCareerPlan,
    loadingInterview
  } = useAppContext();


  const renderMenu = (icon: React.ReactNode, text: string, index: number) => {

    return (
      <div
        key={text}
        className={`h-20 px-8 flex items-center justify-start mt-0 ${moduleActive === index ? "bg-blue-500" : "hover:bg-custom-blue-light"} cursor-pointer`}
        onClick={() => setModuleActive(index)}
      >
        {icon}
        <span className="text-white">{text}</span>
        {index == 2 && loadingProfile ? <Loading /> : ""}
        {index == 3 && loadingCareerPlan ? <Loading /> : ""}
        {index == 4 && loadingInterview ? <Loading /> : ""}
      </div>
    )
  }

  return (
    <div className="hidden h-full lg:flex flex-col justify-between items-end max-w-7xl mx-auto">
      <nav className="flex-col ml-0 w-[400px] min-h-full bg-custom-blue px-0 pt-4">

        <h4 className="font-bold text-lg text-white mt-4 mb-28  text-center lg:text-xl">
          Connection.ai
        </h4>

        {menuItems.map((icon, index) => (
          renderMenu(icon.icon, icon.text, index)
        ))}

      </nav>
    </div>
  )
}