import Image from "next/image"
import LinkedIn from "./ui/Icons/linkedinLogo"
import X from "./ui/Icons/xLogo"
import Instagram from "./ui/Icons/instagramLogo"
import HorizontalLine from "./ui/Icons/horizontalLine"
import VerticalLineS from "./ui/Icons/verticalLineS"
import VerticalLineL from "./ui/Icons/verticalLineL"
import EmailIcon from "./ui/Icons/emailIcon"
import PhoneIcon from "./ui/Icons/phoneIcon"


export default function Footer() {
   return (
      <footer>
         {/* Get in Touch */}
         <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 xl:gap-2.5 p-6 xl:px-16 xl:py-10 text-white bg-[#1D0617] border-b border-[#C4C4C4]">
            <div className="flex flex-col gap-4 xl:gap-2.5">
               <p className=" text-sm xl:text-lg font-nunitosans">Ready to be a part of something extraordinary?</p>
               <p className="text-xl xl:text-[32px] font-semibold font-nunito">Let&apos;s work together to create a difference</p>
            </div>

            <button className="text-sm font-nunito font-semibold w-fit py-[11.5px] px-5.5 xl:px-6 xl:py-3 bg-[#571244] rounded">
               Get in Touch
            </button>
         </div>

         {/* Company About and Contact */}
         <div className="flex flex-col p-5 gap-5 xl:py-8 xl:px-16 bg-[#11040E]">
            {/* Company's About */}
            <div className="flex flex-col xl:flex-row xl:justify-between pt-5 xl:py-5">
               <div className="flex flex-col items-start gap-6">
                  {/* Company Logo */}
                  <Image
                     alt="Tobams Group Logo"
                     src="/Images/companyLogo.svg"
                     width={188}
                     height={72.6}
                     loading="eager"
                  />
                  <p className="text-sm xl:text-base text-[#F8F8F8] font-nunitosans">Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>

                  {/* Social handles */}
                  <div className="flex gap-5">
                     <LinkedIn/>
                     <Instagram/>
                     <X/>
                  </div>
               </div>

               {/* What we do */}
               <div className="flex flex-col gap-4 text-white">
                  <h2 className="text-lg font-nunitosans font-bold">What We Do</h2>
                  <ul className="flex flex-col gap-3 text-sm font-nunitosans">
                     <li>Sustainability Services</li>
                     <li>Strategy Planning and Implementation</li>
                     <li>Tech Talent Solutions</li>
                     <li>Training and Development</li>
                     <li>IT Consulting Services</li>
                     <li>Social Impact</li>
                  </ul>
               </div>

               {/* Company */}
               <div className="flex flex-col gap-4 text-white">
                  <h2 className="text-lg font-nunitosans font-bold">Company</h2>
                  <ul className="flex flex-col gap-3 text-sm font-nunitosans">
                     <li>About</li>
                     <li>Jobs</li>
                     <li>Projects</li>
                     <li>Our Founder</li>
                     <li>Business Model</li>
                     <li>The Team</li>
                     <li>Contact Us</li>
                     <li>Blog</li>
                     <li>FAQ</li>
                     <li>Testimonials</li>
                  </ul>
               </div>

               {/* Solution */}
               <div className="flex flex-col gap-4 text-white">
                  <h2 className="text-lg font-nunitosans font-bold">Solution</h2>
                  <ul className="flex flex-col gap-3 text-sm font-nunitosans">
                     <li>Tobams Group Academy</li>
                     <li>Help a Tech Talent</li>
                     <li>Campus Ambassadors Program</li>
                     <li>Join Our Platform</li>
                     <li>Pricing</li>
                     <li>Book a Consultation</li>
                     <li>Join Our Slack Community</li>
                  </ul>
               </div>
            </div>

            {/* Horizontal line */}
            <HorizontalLine/>

            <div className="flex flex-col gap-6">
               <div className="flex flex-col xl:flex-row-reverse items-center gap-6 p-4 bg-[#FFFFFF0F] rounded-lg">
                  {/* Contact Information */}
                  <div className="flex flex-col gap-4">
                     <h2 className="text-lg text-white font-bold font-nunitosans">Contact Information</h2>
                     <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-4">
                           <EmailIcon/>
                           <p className="text-sm text-white font-nunitosans">theteam@tobamsgroup.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                           <PhoneIcon/>
                           <p className="text-sm text-white font-nunitosans">+447886600748</p>
                        </div>
                     </div>
                  </div>

                  <VerticalLineL/>

                  {/* Registered Offices */}
                  <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-2.5">
                     <h2 className="text-lg text-white font-bold font-nunitosans">Registered Offices</h2>

                     <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                        <div className="text-white text-sm font-nunitosans">
                           <span className="text-[#EF4353] text-base font-nunitosans">United Kingdom</span> <br />
                           07451196 (Registered by Company House) <br />
                           Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                        </div>
                        <VerticalLineS/>
                        <div className="text-white text-sm font-nunitosans">
                           <span className="text-[#EF4353] text-base font-nunitosans">Nigeria</span> <br />
                           RC 1048722 (Registered by the Corporate Affairs Commission) <br />
                           4, Muaz Close, Angwari-Rimi
                        </div>
                     </div>
                  </div>
               </div>

               {/* Horizontal line */}
               <HorizontalLine/>

               <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-light font-nunito underline leading-9">
                     <p>Privacy Policy</p>
                     <p>Cookies Policy</p>
                     <p>Terms and Conditions</p>
                  </div>

                  <p className="text-white text-sm font-light font-nunito underline leading-6">Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>
               </div>
            </div>
         </div>
      </footer>
   )
}