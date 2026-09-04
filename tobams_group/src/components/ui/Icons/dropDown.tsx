type prop = {
   color : string
}

export default function DropDown({color}:prop) {
   return (
      <svg className="w-2.5 h-1.5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d={`M0.75 0.750001L4.91667 4.91667L9.08333 0.750001 ${color}`} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
   )
}