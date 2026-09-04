import Image from "next/image";
import Hamburger from "./ui/Icons/hamburgerMenu";
import ProfileIcon from "./ui/Icons/profileIcon";
import DropDown from "./ui/Icons/dropDown";


export default function Navbar() {
   const nav = [
      {
         heading:"About",
         dropdown: {
            status: true,
            color: "#571244"
         },
         selected: true
      },
      {
         heading:"What We Do",
         dropdown: {
            status: true,
            color: "#571244"
         },
         selected: false
      },
      {
         heading:"Jobs",
         dropdown: {
            status: true,
            color: "#571244"
         },
         selected: false
      },
      {
         heading:"Projects",
         dropdown: {
            status: false,
            color: "#571244"
         },
         selected: false
      },
      {
         heading:"TG Academy",
         dropdown: {
            status: false,
            color: "#571244"
         },
         selected: false
      },
      {
         heading:"Strategic Partnership",
         dropdown: {
            status: false,
            color: "#571244"
         },
         selected: false
      },
      {
         heading:"Pricing",
         dropdown: {
            status: false,
            color: "#571244"
         },
         selected: false
      },
      {
         heading:"Book a Consultation",
         dropdown: {
            status: false,
            color: "#571244"
         },
         selected: false
      }
   ]
   return (
      <nav className="flex flex-col">
         {/* Top Navbar part */}
         <div className="flex items-center justify-between border-b border-b-[#DDD0DA] pt-4.5 pb-4 px-6 md:py-6 md:px-16">
            {/* Company's Logo */}
            <Image
               alt="Tobams Group Logo"
               src="/Images/companyLogo.svg"
               width={166}
               height={64}
               loading="eager"
            />
            {/* Hamburger Menu. Only visible on mobile */}
            <Hamburger/>
            {/* Account and Take accessment buttons */}
            <div className="hidden md:flex gap-6">
               {/* Account */}
               <div className="flex items-center gap-4 bg-[#571244] px-4 py-2 rounded">
                  <ProfileIcon/>
                  <p className="text-white text-lg font-nunitosans font-semibold">Account</p>
                  <DropDown color = "#DDD0DA"/>
               </div>
               {/* Take Accessment */}
               <div className="flex items-center gap-4 bg-[#EF4353] px-4 py-2 rounded">
                  <p className="text-white text-lg font-nunitosans font-semibold">Take Assessment</p>
               </div>
            </div>
         </div>

         {/* Button Navbar part */}
         <div className="hidden md:flex justify-center gap-8 px-16 py-5">
           {nav.map((each, i) => {
               return (
                  <div key={i} className={`flex gap-2.5 ${each.selected ? "text-[#571244] border-b border-b-[#571244]" : "text-[#151515]"} items-center pb-2`}>
                     <p className="font-nunitosans text-[18px]">{each.heading}</p>
                     {each.dropdown.status && <DropDown color = "#571244"/>}
                  </div>
               )
           })}
         </div>
      </nav>
   )
}