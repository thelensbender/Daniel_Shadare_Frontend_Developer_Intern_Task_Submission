import TestimonialCard from "./testimonialCard"
import TestimonialNavLeft from "./ui/Icons/testimonialNavLeft"
import TestimonialNavRight from "./ui/Icons/testimonialNavRight"

export default function Testimonials() {
   const sarahTestimonial = "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!"
   const laptopTestimonials = [
      {
         name: "Aisha Yusuf",
         companyPosition: "Founder, CraftHub NG",
         image: "/Images/users/sarah.png",
         testimonial: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!"
      },
      {
         name: "John Davies",
         companyPosition: "Marketing Manager, E-Commerce Emporium",
         image: "/Images/users/john.png",
         testimonial: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!"
      },
      {
         name: "Chinonso Nwankwo",
         companyPosition: "HR Director, FutureTech Solutions",
         image: "/Images/users/chinonso.png",
         testimonial: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward."
      },
      {
         name: "No Idea",
         companyPosition: "No Idea",
         image: "/Images/users/noIdea.jpg",
         testimonial: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects."
      }
   ]
   return (
      <section className="flex flex-col gap-6 xl:gap-10 p-6 xl:py-16 xl:pl-16 border-b border-[#C4C4C44D]">
         <div className="flex flex-col items-center gap-6">
            {/* Heading */}
            <h1 className="text-xl lg:text-[30px] xl:text-[40px] font-nunito font-bold">Testimonials</h1>

            {/* Testimomials for mobile */}
            <div className="flex sm:hidden">
               <TestimonialCard name="Sarah Johnson" companyPosition="CEO of Tech Innovations Inc." image="/Images/users/sarah.png" testimonial={sarahTestimonial}/>
            </div>

            {/* Testimomials for bigger screen */}
            <div className="hidden w-full sm:flex sm:justify-start overflow-hidden gap-5.75">
               {laptopTestimonials.map((each, i) => {
                  return (
                     <div key={i}><TestimonialCard name={each.name} companyPosition={each.companyPosition} image={each.image} testimonial={each.testimonial} /></div>
                  )
               })}
            </div>
         </div>

         {/* Navigation Buttons */}
         <div className="flex justify-end gap-3">
            <div className="px-[9.3px] xl:px-[10.67px] py-[6.58px] xl:py-[7.51px] bg-[#F043541A]"><TestimonialNavLeft/></div>
            <div className="px-[9.3px] xl:px-[10.67px] py-[6.58px] xl:py-[7.51px] bg-[#F043541A]"><TestimonialNavRight/></div>
         </div>
      </section>
   )
}