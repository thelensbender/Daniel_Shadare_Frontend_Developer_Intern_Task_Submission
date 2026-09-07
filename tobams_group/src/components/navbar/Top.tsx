import Image from "next/image"
import Hamburger from "../ui/Icons/hamburgerMenu"
import ProfileIcon from "../ui/Icons/profileIcon"
import DropDown from "../ui/Icons/dropDown"

export default function navbarBottom() {
   return(
      <div className="flex items-center justify-between border-b border-b-[#DDD0DA] pt-4.5 pb-4 px-6 xl:py-6 xl:px-16">
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
   )
}