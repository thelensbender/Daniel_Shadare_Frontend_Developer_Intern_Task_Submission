import ServicesCard from "./serviceCard"

export default function Services() {
   const services = [
      {
         heading: "Corporate Trainings",
         description: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
         image: {
            src: "/Images/corporateTrainings.jpg",
            width: 602,
            height: 346,
            borderRadius: "rounded-tl-[30px] xl:rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[40px] xl:rounded-bl-[12px]"
         },
         list: ["Leadership Training", "Strategic Planning and Implementation", "Project Management", "Sustainability Training", "Customised Training"],
         extraStyle: "xl:gap-16"
      },
      {
         heading: "Personalised Individual Training",
         description: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals. ",
         image: {
            src: "/Images/personalisedIndividualTraining.jpg",
            width: 599,
            height: 378,
            borderRadius: "rounded-tl-[33px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
         },
         list: ["Leadership Development", "Soft Skills Development", "Industry Specific Knowledge", "Technical Skills Enhancement", "Time Management and Productivity", "Career Development"],
         extraStyle: "xl:gap-20.25 pr-[3px]"
      },
      {
         heading: "Capacity Development",
         description: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
         image: {
            src: "/Images/capacityDevelopment.jpg",
            width: 601,
            height: 405,
            borderRadius: "rounded-tl-[33px] xl:rounded-tl-[40px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
         },
         list: ["Tailored Training Programs", "Expert-Led Workshops", "Personalized Mentorship", "Technical Skills Enhancement", "Collaborative Learning Environment", "Ongoing Support and Resources"],
         extraStyle: "xl:gap-16 pr-[3px]"
      },
   ]
   return (
      <section className="flex flex-col rounded-2xl gap-6 xl:gap-30 p-6 xl:p-16 bg-white">
         {services.map((each, i) => {
            return(
               <div key={i}>
                  <ServicesCard heading={each.heading} description={each.description} image={each.image} list={each.list} extraStyle={each.extraStyle} i={i}/>
               </div>
            )
         })}
      </section>
   )
}