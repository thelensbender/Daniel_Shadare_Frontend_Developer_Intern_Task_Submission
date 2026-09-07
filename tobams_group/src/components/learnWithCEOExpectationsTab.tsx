import LWCListBullet from "./ui/Icons/lwcListBullet"

type prop = {
   point:string
}

export default function  LearningWithCEOTab({point}:prop) {
   return (
      <div className="flex items-center gap-2.5 bg-white rounded-xl p-4">
         <LWCListBullet/>
         <p className="text-sm xl:text-lg font-nunitosans">{point}</p>
      </div>
   )
}