type prop = {
   heading: string,
   details: string
}

export default function TrainingTheConsultantExpectation({heading, details}:prop) {
   return (
      <div className="flex flex-col gap-3">
         <h2 className="text-white font-bold font-nunitosans">{heading}</h2>
         <p className="text-white text-sm font-nunitosans">{details}</p>
      </div>
   )
}

