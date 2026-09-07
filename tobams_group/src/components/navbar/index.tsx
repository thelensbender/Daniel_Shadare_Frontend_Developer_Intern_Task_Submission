import NavbarBottom from "./Bottom"
import NavbarTop from "./Top"


export default function Navbar() {
   return (
      <nav className="flex flex-col">
         {/* Top Navbar part */}
         <NavbarTop/>

         {/* Button Navbar part */}
         <NavbarBottom/>
      </nav>
   )
}