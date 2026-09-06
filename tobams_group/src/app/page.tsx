import Navbar from "@/components/navbar";
import WhatWeDo from "@/components/whatWeDo";
import LMS from "@/components/LMS";
import Services from "@/components/Services";
import ManagementDevelopmentProgram from "@/components/MDP";

export default function Home() {
   return (
      <div>
         {/* Navbar */}
         <Navbar/>

         <main className="flex flex-col gap-6 xl:gap-10">
            {/* What We Do Section */}
            <WhatWeDo/>

            {/* Learning Management System Section */}
            <LMS/>

            {/* Services Section - Corporate Training, Personal Individual Training... */}
            <Services/>

            {/* Management Development Program Section */}
            <ManagementDevelopmentProgram/>
         </main>
      </div>
   )
}
