import Image from "next/image"
import ManagementDevelopmentProgramTab from "./managementDevelopmentProgramExpectationTab"

export default function ManagementDevelopmentProgram() {
   const list = ["Enhanced Leadership Skills", "Improved Employee Engagement", "Stronger Organisational Culture", "Sustainable Growth"]
   return(
      <section className="flex flex-col xl:flex-row gap-5 xl:gap-12 mx-6 xl:mx-16 rounded-[20px] px-5 py-4 xl:p-10 bg-[#2C0922]">
         {/* Heading for mobile */}
         <h1 className="flex xl:hidden text-white font-nunito font-semibold">Management Development Program</h1>

         {/* Section Image */}
         <Image
            alt="A picture of colleagues talking in an office area"
            src="/Images/MDPImage.jpg"
            width={592}
            height={639}

            className="rounded-tl-lg rounded-tr-lg rounded-bl-lg xl:h-159.75 object-cover"
         />

         {/* Section Description */}
         <div className="flex flex-col gap-8">
            <div className="flex flex-col xl:gap-5">
               {/* Heading for Laptop */}
               <h1 className="xl:flex gap-12 hidden text-white text-[40px] font-nunito font-semibold">Management Development Program</h1>
               <p className="text-sm xl:text-lg text-white font-nunitosans">
                  Tobams Group offers a comprehensive Management
                  Development Program designed to equip corporate
                  organisations with the high
                  -performing leaders they need to
                  thrive.
                  <br />
                  <br />
                  Our program includes workshops, seminars, coaching
                  sessions, online courses, and experiential learning
                  opportunities designed to improve leadership, strategic
                  thinking, communication, and other essential managerial
                  competencies for corporate organisations.
               </p>
            </div>

            {/* Expectations list */}
            <div className="flex flex-col gap-6.25 py-2 xl:px-4">
               {list.map((each, i) => {
                  return (
                     <div key={i}>
                        <ManagementDevelopmentProgramTab point={each}/>
                     </div>
                  )
               })}
            </div>

         </div>
      </section>
   )
}