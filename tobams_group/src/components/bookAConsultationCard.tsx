

export default function BookAConsultation() {
   return (
      <div className="flex flex-col items-center gap-8 mx-6 xl:mx-38.25 px-6 xl:px-16 py-8 bg-[#571244] rounded-lg">
         {/* For mobile */}
         <p className=" xl:hidden text-white text-center font-nunito font-semibold">
            Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
         </p>

         {/* For Laptop */}
         <p className="hidden xl:flex text-white text-xl text-center font-nunito font-semibold">
            Want to accelerate professional growth and development at your organisation? <br /> See how we can help.
         </p>
         <button className="w-fit bg-white px-6 py-3 rounded text-[#571244] text-sm xl:text-lg font-semibold font-nunito">
            Book a Consultation
         </button>
      </div>
   )
}