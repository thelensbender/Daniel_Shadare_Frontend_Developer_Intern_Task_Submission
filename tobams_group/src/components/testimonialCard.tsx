import Image from "next/image"

type prop = {
   name: string
   companyPosition: string
   image: string
   testimonial: string
}

export default function TestimonialCard({name, companyPosition, image, testimonial}:prop) {
   return (
      <div className="xl:w-105.5 flex flex-col items-start gap-4 border-l-2 border-l-[#EF4353] p-5 xl:px-5 xl:py-6 rounded-lg bg-white">
         {/* User Details */}
         <div className="flex items-center gap-5.25">
            {/* User Image */}
            <Image
               alt={`Image of ${name}, the ${companyPosition}`}
               src= {image}
               width={44}
               height={44}

               className="h-11 rounded-full"
            />

            {/* User Name and company position */}
            <div>
               <p className="text-sm xl:text-base font-nunitosans font-semibold">{name}</p>
               <p className="text-xs xl:text-sm text-[#696969] font-nunitosans">{companyPosition}</p>
            </div>
         </div>

         {/* User Testimonial */}
         <p className="text-xs xl:text-lg font-nunitosans">{testimonial}</p>
      </div>
   )
}