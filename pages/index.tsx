/* eslint-disable @next/next/no-img-element */
import { Home3, ProfileCircle, Bag2, Message } from "iconsax-react"
import { useState } from "react"
import backgroundFigure from "../assets/backgroundFigure.png"

import dynamic from "next/dynamic"
import Opening from "@/components/Opening"
import IsiHome from "@/components/IsiHome"
import IsiProfile from "@/components/IsiProfile"
// @ts-ignore
const foo = dynamic(import("tw-elements"), { ssr: false })
import "animate.css"

export default function Home() {
  const [isHome, setIsHome] = useState<string>("profile")

  const handleChangePage = (menu: string) => {
    setTimeout(() => {
      setIsHome(menu)
    }, 0)
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-row w-full h-[90%] justify-center gap-5">
        {/* menu untuk profile */}
        <div className="bg-[#205295] items-center justify-center rounded-full w-[3%] h-[30%] flex flex-col gap-5">
          <button onClick={() => handleChangePage("home")}>
            <Home3 size={30} color="white" />
          </button>
          <button onClick={() => handleChangePage("profile")}>
            <ProfileCircle size={30} color="white" />
          </button>
          <button onClick={() => handleChangePage("projects")}>
            <Bag2 size={30} color="white" />
          </button>
          <button onClick={() => handleChangePage("message")}>
            <Message size={30} color="white" />
          </button>
        </div>
        {/* isi profile */}
        <div className="bg-[#144272] self-center gap-1 flex items-center flex-col w-[60%] h-full rounded-[40px]">
          <Opening />
          {/* section isi cv */}
          {/* Home section */}
          <IsiHome isAnimated={isHome === "home"} />
          <IsiProfile isAnimated={isHome === "profile"} />
        </div>
      </div>
    </div>
  )
}
