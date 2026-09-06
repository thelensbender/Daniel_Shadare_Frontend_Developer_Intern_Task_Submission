type props = {
   text: string,
   textColor: string,
   bgColor: string
}

export default function Button1({text, textColor, bgColor}:props) {
   return (
      <div className={`text-sm xl:text-lg ${textColor} bg-[${bgColor}] font-semibold font-nunitosans py-[11.5px] px-5.5 xl:py-3 xl:px-6 rounded`}>{text}</div>
   )
}
