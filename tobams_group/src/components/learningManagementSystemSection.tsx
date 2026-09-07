import Image from "next/image"
import LearnMore from "./ui/learnMoreButton"

export default function LMS() {
   return(
      <section className="flex flex-col lg:flex-row items-center gap-6 xl:gap-20 bg-[#5712441A] p-6 lg:py-12 xl:px-16">
         {/* Heading for mobile */}
         <div className="flex lg:hidden w-full justify-start">
            <h1 className="text-[#571244] text-xl text-nowrap  font-nunito font-semibold">Learning Management System</h1>
         </div>

         {/* Image of a corporately dressed man and woman smiling */}
         <Image
            alt="Image of a corporately dressed man and woman smiling"
            src="/Images/LMSImage.jpg"
            width={327}
            height={327}
            className="h-81.75 xl:h-142 xl:w-139.25 rounded-full object-cover"
         />

         {/* Learning Management System information card */}
         <div className="flex flex-col lg:gap-8">
            <div className="flex flex-col gap-5">
               {/* Heading for Laptop */}
               <div className="hidden lg:flex w-full justify-start">
                  <h1 className="text-[#571244] text-[40px] text-nowrap  font-nunito font-semibold">Learning Management System</h1>
               </div>
               <div className="flex flex-col rounded-lg gap-6 bg-[#5712441A] p-6 lg:gap-5">
                  <p className="text-sm  xl:text-lg text-[#151515] font-nunitosans">
                     TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
                  </p>
                  {/* List of courses */}
                  <div className="flex flex-col gap-3">
                     <h3 className="text-[#571244] text-base xl:text-lg text-nowrap font-nunitosan font-bold">Some of our courses include:</h3>
                     <ul className="flex flex-col lg:grid lg:grid-cols-3 gap-3 list-disc pl-5 text-sm xl:text-base font-nunitosan">
                        <li>Business Analysis</li>
                        <li>Design Thinking</li>
                        <li>Effective Communication</li>
                        <li>Entrepreneurship</li>
                        <li>Career Development</li>
                        <li>Business Model</li>
                     </ul>
                  </div>
                  {/* Learn More Button for Mobile */}
                 <div className="flex lg:hidden"><LearnMore/></div>
               </div>
            </div>

            {/* Learn More Button For Laptop */}
            <div className="lg:flex hidden"><LearnMore/></div>
         </div>
      </section>
   )
}