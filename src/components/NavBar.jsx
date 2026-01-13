import { useState } from "react";
import logo from "../images/logo.jpeg";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

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
          <span className="text-sm font-bold text-black">kenseipowertech</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-1.5 rounded-full font-medium transition
                ${
                  active === item
                    ? "border border-green-600 text-green-600 bg-transparent"
                    : "text-gray-700 hover:text-green-600"
                }`}
            >
              {item}
            </button>
          ))}

          <button className="ml-3 flex items-center gap-2 bg-green-500 hover:bg-black text-white px-5 py-2 rounded-full font-semibold transition">
            Book Consult
            <ArrowUpRight size={18} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-full font-medium transition
                ${
                  active === item
                    ? "border border-green-600 text-green-600 bg-transparent"
                    : "text-gray-700"
                }`}
            >
              {item}
            </button>
          ))}

          <button className="w-full mt-2 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-full font-semibold">
            Book Consult
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
