"use client"
import Link from "next/link";
import useAppContext from "./context/appContext";
import { Sidebar, About, ChatContainer, Profile, CareerPlan, Interview } from "./components";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";

export default function Home() {
  const { moduleActive } = useAppContext();

  return (
    <>
      <main className="h-screen w-full flex flex-row mt-0 bg-white overflow-hidden">
        <Sidebar />
        <section className="mx-3 sm:mx-20 flex flex-col w-full p-5 rounded-3xl">
          <div className="w-full h-12 px-4 pt-0 flex justify-between items-center max-w-[110rem] mx-auto xl:px-6 xl:justify-end">

            <div className="mx-4 flex items-center gap-2">
              <Link href="https://hackbox.microsoft.com/hackathons/Innovation-Challenge-March-2025/project/91588" target="_blank" title="Open Hackbox project">
                <div className="flex items-center gap-2">
                  <MdOutlineWebAsset size={20} />
                  <span className="text-sm">Hackbox</span>
                </div>
              </Link>
            </div>

            <div className="mx-4 flex items-center gap-2">
              <Link href="https://github.com/me-wsantos/hackathon-ms" target="_blank" title="Open Github repository">
                <div className="flex items-center gap-2">
                  <FaGithub size={20} />
                  <span className="text-sm">Github</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-row h-full mt-6">
            <div
              className={`flex flex-col flex-auto h-full p-1 ${moduleActive >= 2 ? 'overflow-y-auto' : 'overflow-hidden'} `}
            >
              { moduleActive == 0 && <About /> }
              { moduleActive == 1 && <ChatContainer /> }
              { moduleActive == 2 && <Profile /> }
              { moduleActive == 3 && <CareerPlan /> }
              { moduleActive == 4 && <Interview /> }
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
