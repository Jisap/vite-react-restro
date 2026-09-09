import { MenuIcon } from "lucide-react"
import { navLinks } from "../data/data"

const Navbar = () => {
  return (
    <div className='fixed top-0 px-auto w-full transition-all duration-300 bg-transparent'>
      <div className='flex items-center justify-between font-medium py-4 mx-auto max-w-7xl'>
        <a href="/">
          <img
            src="/assets/logo.svg"
            alt="logo"
          />
        </a>

        {/* desktop navigation links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-zinc-600">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#booking-process" className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3
         rounded-full transition"
        >
          Book a table
        </a>

        <button className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square">
          <MenuIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar