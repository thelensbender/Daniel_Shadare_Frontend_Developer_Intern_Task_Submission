type prop = {
   heading: string,
   details: string
}

export default function TrainingTheConsultantExpectation({heading, details}:prop) {
   return (
      <div className="flex flex-col gap-3">
         <h2 className="text-white xl:text-lg font-bold font-nunitosans">{heading}</h2>
         <p className="text-white text-sm xl:text-lg font-nunitosans">{details}</p>
      </div>
   )
}

