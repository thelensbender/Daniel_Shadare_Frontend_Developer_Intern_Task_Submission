import NavbarBottom from "./bottom"
import NavbarTop from "./top"


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