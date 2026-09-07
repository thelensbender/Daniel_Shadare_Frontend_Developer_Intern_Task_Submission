import Image from "next/image";
import ServiceListBullet from "./ui/Icons/serviceListBullet";

// data type of the the image object
type ServiceImage = {
  src: string
  alt: string
  width: number
  height: number
  borderRadius: string
}

type prop = {
   heading: string
   description: string
   image: ServiceImage
   list: string[],
   extraStyle: string,
   i: number
}

export default function ServicesCard({heading, description, image, list, extraStyle, i}:prop) {
   return (
      <div className={`flex flex-col ${i%2===0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${extraStyle} gap-6 items-center`}>
         {/* Service Heading for mobile view */}
         <div className="w-full flex lg:hidden justify-start">
            <h1 className="text-xl text-[#151515] font-nunito font-semibold">{heading}</h1>
         </div>

         {/* Service Image */}
         <Image
         alt={image.alt}
         src={image.src}
         width={image.width}
         height={image.height}
         loading="eager"

         className={image.borderRadius}
         />

         {/* Service details */}
         <div className="flex-1 flex-col gap-5 lg:gap-5.25">
            {/* Service Heading for laptop */}
            <div className="w-full lg:flex hidden text-nowrap justify-start">
               <h1 className="lg:text-[30px] text-[40px] text-[#151515] font-nunito font-semibold">{heading}</h1>
            </div>

            <div className="flex flex-col gap-5 lg:gap-4.75">
               {/* Service description */}
               <p className="text-[#696969] text-sm xl:text-lg font-nunitosans">{description}</p>
               {/* Service Expectations */}
               <div className="flex flex-col gap-2.5">
                  {list.map((each, i) => {
                     return (
                        <div key={i} className="flex justify-start items-center gap-3.5 text-[#696969] text-sm xl:text-lg font-nunitosans">
                           <ServiceListBullet/>
                           <p className="text-nowrap">{each}</p>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>
   )
}