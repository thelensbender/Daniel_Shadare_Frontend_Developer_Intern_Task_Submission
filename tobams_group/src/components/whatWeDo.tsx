import Image from "next/image";
import Button1 from "./ui/button1";

export default function WhatWeDo() {
   return (
      <section className="relative flex justify-center w-full h-79 xl:h-127">
         {/* Background Image of What We Do section */}
         <Image
            alt="Image of a lady working on a computer."
            src="/Images/ladyBackground.png"
            width={1440}
            height={511}
            className="object-cover w-full"
         />

         {/* Informations overlaid on the image with a faint background color */}
         <div className="flex flex-col gap-6 xl:gap-10 justify-center items-center absolute bg-[#000000B2] w-full h-79 xl:h-127 py-10 px-6 xl:py-28 xl:px-45 z-2">
            <div className="flex flex-col gap-2 xl:gap-3 items-center">
               {/* Heading */}
               <div className="flex justify-center items-center w-fit bg-[#FFFFFF1A] font-nunitosans font-semibold text-sm xl:text-sm text-white py-2.5 px-9 xl:py-3 xl:px-12 rounded-full">WHAT WE DO</div>
               <div className="flex flex-col items-center gap-3 xl:gap-3.75">
                  {/* Different Heading for different screen sizes. Strictly following the figma design */}
                  <p className=" flex xl:hidden text-2xl xl:text-[56px] text-white text-nowrap font-nunito font-bold">Learning and Development</p>
                  <p className="hidden xl:flex text-2xl xl:text-[56px] text-white text-nowrap font-nunito font-bold">Training and Development</p>
                  <p className="text-[14px] xl:text-lg text-white text-center font-nunitosans font-semibold">Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.</p>
               </div>
            </div>
            {/* Button */}
            <Button1 text="Book a Consultation" textColor="text-white" bgColor="#571244"/>
         </div>
      </section>
   )
}
