import TopRightArrow from "./Icons/topRightArrow"

export default function LearnMore() {
   return (
      <button className="flex items-center gap-3.5 w-fit bg-[#571244] py-[13.5px] px-6 xl:py-3 xl:px-6 rounded">
         <p className="text-sm xl:text-lg text-white font-semibold font-nunitosans">Learn More</p>
         <TopRightArrow/>
      </button>
   )
}