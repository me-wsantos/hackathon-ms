"use client"
import { HiOutlineInformationCircle } from "react-icons/hi";

export const About = () => {
  return (
    <div className="flex flex-col flex-shrink-0 rounded-2xl h-[calc(100vh-150px)] p-4">
      <div className="upload-section ">
        <div className="h-auto flex flex-col p-0 w-100">
          <section className="h-full flex flex-col justify-start">
            <div className="h-full pb-0 flex justify-start items-end border-b-2">
              <HiOutlineInformationCircle size={35} color={"#000"} className="mr-4 mb-0" />
              <div
                className="w-full p-0 text-custom-blue-100 text-xl items-end leading-normal font-bold text-start md:text-2xl">
                About
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-full pr-12">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores beatae perferendis suscipit itaque nobis aliquid magnam est molestiae perspiciatis voluptatibus hic consequatur necessitatibus expedita voluptate, neque dolor tenetur explicabo.
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
