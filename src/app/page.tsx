"use client"
import Image from "next/image";
import { Sora } from "next/font/google"
import data from "@/data/profile.json"
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react" ;


const sora = Sora({
  subsets: ["latin"],
  weight: "300"
})

export default function Home() {
  return (
    <div className=" flex flex-col px-4 md:px-0 md:flex-row md:justify-center mx-auto  md:items-center min-h-screen bg-background ">
      <div className="md:w-[40vw] px-3">
        <div className="head-info">
          <h1 className={`md:text-4xl text-2xl text-yellow-200 antialiased  ${sora.className} `}>Hi , I'm Dhanjit  Nath </h1>
          <h1 className="md:text-2xl tex-xl text-blue-400 ">Full Stack Developer </h1>
        </div>
        <div className="bio md:pt-2 pt-1">
          <p className="text-lg">{data["profile-bio"]}</p>
        </div>
        <div className="home-foot-links md:pt-4 flex items-center justify-start">
          <div className="icon-holder rounded-[50%] cursor-pointer hover:bg-slate-700 flex items-center p-3 ">
            <Github  />
          </div>
          <div className="icon-holder rounded-md cursor-pointer hover:bg-slate-700 flex items-center p-0">
            <Button variant="outline" className="cursor-pointer "> Download CV </Button> 
          </div>
        </div>
      </div>
      <div className="md:w-[35vw]  md:pl-20 self-center ">

        <div className="image-holder  hover:bg-[linear-gradient(-45deg,#facc15,#60a5fa,#f472b6,#4ade80)] bg-[length:400%_400%] animate-[gradientShift_2s_ease_infinite] rounded-[50%] p-2 cursor-wait " >
          <Image className="rounded-[50%] " src={"https://placehold.co/500x500"} width={500} height={500} alt="Profile image" />

        </div>
      </div>
    </div>
  );
}
