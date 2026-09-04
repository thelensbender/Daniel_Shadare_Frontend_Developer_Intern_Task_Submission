import Image from "next/image";

export default function WhatWeDo() {
   return (
      <div className="relative flex justify-center w-full h-79 md:h-127">
         <Image
            alt="Image of a lady working on a computer."
            src="/Images/ladyBackground.png"
            width={1440}
            height={511}
            className="object-cover w-full "
         />
         <div className="flex flex-col gap-6 justify-center items-center absolute bg-[#000000B2] w-full h-79 md:h-127 py-10 px-6 md:py-28 md:px-16 z-2">
            <div className="flex flex-col gap-2 items-center">
               <div className="flex justify-center items-center w-fit bg-[#FFFFFF1A] font-nunitosans font-semibold text-sm md:text-sm text-white py-2.5 px-9 md:py-3 md:px-12 rounded-full">WHAT WE DO</div>
               <div className="flex flex-col items-center gap-4">
                  <p className="text-2xl text-white text-nowrap font-nunito font-bold">Learning and Development</p>
                  <p className="text-[14px] text-white text-center font-nunitosans font-semibold">Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.</p>
               </div>
            </div>
            <div className="text-sm text-white font-semibold font-nunitosans py-[11.5px] px-5.5 bg-[#571244] rounded">Book a Consultation</div>
         </div>
      </div>
   )
}
