import Navbar from "@/components/navbar";
import WhatWeDo from "@/components/whatWeDoSection";
import LMS from "@/components/learningManagementSystemSection";
import Services from "@/components/servicesSection";
import ManagementDevelopmentProgram from "@/components/managementDevelopmentProgramSection";
import LearningWithCEO from "@/components/learnWithCEOSection";

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

            {/* Learning with our CEO Section */}
            <LearningWithCEO/>
         </main>
      </div>
   )
}
