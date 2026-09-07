import TrainingTheConsultantExpectation from "./trainingConsulantExpectation"
import RightArrow from "./ui/Icons/rightArrow"

export default function TrainingTheConsultant() {
   // List of training expectation and details
   const list = [
      {
         heading: "Expert-Led Learning",
         details: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
      },
      {
         heading: "Comprehensive Curriculum",
         details: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
      },
      {
         heading: "Interactive Workshops",
         details: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
      },
      {
         heading: "Global Recognition",
         details: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
      },
   ]
   return (
      <section className="flex flex-col gap-8 p-6 xl:py-12 xl:px-16 bg-[#5712441A]">
         <div className="flex flex-col gap-5">
            {/* Headings */}
            <div className="flex flex-col gap-3">
               <h1 className="text-2xl xl:text-[40px] text-[#571244] font-nunito font-semibold">Training The Consultant</h1>
               <h3 className="xl:text-lg text-[#571244] font-nunitosans font-semibold">Maximize Your Potential as a Certified Trainer:</h3>
            </div>
            {/* Description */}
            <p className="text-sm xl:text-lg font-nunitosans">
               With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified trainer. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in Business Analysis while also developing the abilities to mentor and encourage others in their career advancement.
            </p>
            {/* Expectations and details */}
            <div className="flex flex-col xl:grid xl:grid-rows-2 xl:grid-flow-col p-6 gap-5 rounded-lg bg-[#571244]">
               {list.map((each, i) => {
                  return (
                     <div key={i}><TrainingTheConsultantExpectation heading={each.heading} details={each.details}/></div>
                  )
               })}
            </div>
         </div>

         {/* Learn more button */}
         <button className="flex items-center gap-2 px-6 py-3 w-fit bg-[#571244] rounded">
            <p className="text-sm xl:text-lg text-white font-semibold font-nunitosans">Learn More</p>
            <RightArrow/>
         </button>
      </section>
   )
}