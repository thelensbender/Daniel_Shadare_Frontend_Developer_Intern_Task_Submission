import Image from "next/image"
import LearningWithCEOTab from "./learnWithCEOExpectationsTab"
import LearnMore from "./ui/learnMoreButton"

export default function LearningWithCEO() {
   const list = ["Strategic Career Guidance", "Leadership Development", "CV Development", "Sustainability Leadership", "Communication Skills", "Business Model"]
   return (
      <section className="flex flex-col gap-6 m-6 xl:m-16 px-4 py-6 xl:p-10 rounded-xl bg-[#EF435333]">
         {/* Headings for laptop */}
         <div className="hidden lg:flex flex-col gap-2">
            <h3 className="text-[#1671D9] text-xl font-nunitosans font-semibold">Learning With Our CEO:</h3>
            <h2 className="text-[#571244] text-[32px] font-nunito font-semibold italic">Transformation Hub With Jite Newton</h2>
         </div>

         <div className="flex flex-col gap-5">
            {/* Headings for mobile */}
            <div className="flex lg:hidden flex-col gap-2">
               <h3 className="text-[#1671D9] text-sm font-nunitosans font-semibold">Learning With Our CEO:</h3>
               <h2 className="text-[#571244] text-xl font-nunito font-semibold italic">Transformation Hub With Jite Newton</h2>
            </div>

            {/* Decription for laptop */}
            <p className="text-lg hidden lg:flex font-nunitosans">
               Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
            </p>

            {/* Description and image for mobile */}
            <div className="flex flex-col items-center gap-5">
               <p className="text-sm xl:hidden font-nunitosans">
                  Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
               </p>

               {/* Image */}
               <Image
                  alt="Picture of a lady staring at a huge screen"
                  src="/Images/LWCImage.jpg"
                  width={560}
                  height={340}

                  className="lg:hidden h-58 object-cover rounded-lg"
               />
            </div>
         </div>

         <div className="lg:flex gap-8">
            {/* Image for laptop */}
            <Image
               alt="Picture of a lady staring at a huge screen"
               src="/Images/LWCImage.jpg"
               width={560}
               height={340}

               className="hidden lg:flex object-cover rounded-lg"
            />

            <div className="w-full flex flex-col gap-6 p-5 xl:px-5 xl:py-8 rounded-lg bg-[#FFFFFF4D]">
               {/* Expectations list */}
               <div className="flex flex-col gap-3 xl:grid xl:grid-cols-2">
                  {list.map((each, i) => {
                     return(
                        <div key={i}><LearningWithCEOTab point={each}/></div>
                     )
                  })}
               </div>
               {/* Learn more buttton */}
               <LearnMore/>
            </div>
         </div>
      </section>
   )
}