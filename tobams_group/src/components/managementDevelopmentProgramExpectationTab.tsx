import MDPListBullet from "./ui/Icons/mdpListBullet"

type prop = {
   point: string
}
export default function ManagementDevelopmentProgramTab({point}:prop) {
   return(
      <div className="flex w-full items-center gap-2 px-2 py-[9.5px] rounded-lg bg-[#8F6182]">
         <MDPListBullet/>
         <p className="text-sm text-white font-nunitosans">{point}</p>
      </div>
   )
}
