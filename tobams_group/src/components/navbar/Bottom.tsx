import DropDown from "../ui/Icons/dropDown"

export default function navbarBottom() {
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
   return(
      <div className="hidden md:flex justify-center md:gap-4 xl:gap-8 xl:px-16 md:py-4 xl:py-5">
         {nav.map((each, i) => {
            return (
               <div key={i} className={`flex md:gap-1.5 xl:gap-2.5 ${each.selected ? "text-[#571244] border-b border-b-[#571244]" : "text-[#151515]"} items-center pb-2`}>
                  <p className="font-nunitosans md:text-sm text-[18px]">{each.heading}</p>
                  {each.dropdown.status && <DropDown color = "#571244"/>}
               </div>
            )
         })}
      </div>
   )
}