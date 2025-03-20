"use client"
import useAppContext from "../context/appContext";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

export const Profile = () => {
  const { profile } = useAppContext();

  const listSkills = (skills: string[]) => {

    if (!skills) return

    return skills.map((skill, index) => {
      return <span key={index}>{skill}, </span>
    })
  }

  const listProfessionalExperience = (data: object) => {
    return Object.entries(data).map(([key, value]) => {

      return <div key={key}>
        <strong className="text-black">{key}: </strong>{value}
      </div>
    })
  }

  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl h-[calc(100vh-150px)] p-4">
      <div className="upload-section">
        <div className="h-auto flex flex-col p-0 w-100">
          <section className="h-full flex flex-col justify-start">
            <div className="h-full pb-0 flex justify-start items-end border-b-2">
              <FaRegUser size={35} color={"#000"} className="mr-4 mb-[.4rem]" />
              <div
                className="w-full p-0 text-custom-blue-100 text-xl items-end leading-normal font-bold text-start md:text-2xl">
                Profile
              </div>
            </div>
            <div className="flex mt-8">
              <div className="min-w-[70%] pr-12">
                <div className="pb-2">
                  <span className="font-semibold mr-2">Name:</span>
                  <span>{profile.Nome}</span>
                </div>
                <div className="py-2">
                  <span className="font-semibold mr-2">Address:</span>
                  <span>{profile.Endereço}</span>
                </div>
                <div className="py-2">
                  <span className="font-semibold mr-2">E-mail:</span>
                  <span>{profile.Email}</span>
                </div>
                <div className="py-2">
                  <span className="font-semibold mr-2">Phone:</span>
                  <span>{profile.Telefone}</span>
                </div>

                <div className="py-2 flex flex-col pr-2 mt-4">
                  <div className="flex items-center mb-2">
                    <IoMdArrowDropright size={20} className="ml-[-.5rem] p-0" />
                    <span className="text-lg font-semibold mx-1">Skills</span>
                  </div>
                  <span>{listSkills(profile.Skills)}</span>
                </div>

                <div className="py-2 flex flex-col pr-2 mt-4">
                  <div className="flex items-center mb-2">
                    <IoMdArrowDropright size={20} className="ml-[-.5rem] p-0" />
                    <span className="text-lg font-semibold mx-1">Professional experience</span>
                  </div>
                  <div className="pl-4">
                    {profile.Experiência &&
                      profile.Experiência.map((item: any, index: number) => (
                        <div
                          key={index}
                          className="flex flex-col mb-2 border-b-2 pb-2"
                        >
                          {listProfessionalExperience(item)}
                        </div>
                      ))
                    }</div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-bold mb-2">Resume</span>
                <span>{profile.Resumo}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
