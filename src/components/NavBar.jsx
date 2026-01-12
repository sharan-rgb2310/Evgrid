import { useState } from "react";
import logo from "../images/logo.jpeg";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Blogs",
    "Contact Us",
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-black">evgrid</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              {item}
            </a>
          ))}
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition">
            Book Consult ↗
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-700 font-medium"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-green-500 text-white py-2 rounded-full font-semibold">
            Book Consult ↗
          </button>
        </div>
      )}
    </header>
  );
}
