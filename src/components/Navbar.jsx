import { MenuIcon, X, XIcon } from "lucide-react"
import { navLinks } from "../data/data"
import { useEffect, useState } from "react"

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })

  return (
    <>
      <nav className={`
        fixed top-0 px-auto w-full transition-all duration-300 bg-transparent
        ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`
      }>
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

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* mobile navigation drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-md transition-all duration-300 ease-in-out ${mobileOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Botón de cerrar en la esquina superior derecha */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 bg-zinc-800 text-white p-2 rounded-md aspect-square"
          aria-label="Close menu"
        >
          <XIcon />
        </button>

        <div className="flex flex-col items-center space-y-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar