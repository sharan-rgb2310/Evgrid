import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpeg";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <span className="text-sm font-bold">kenseipowertech</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full font-medium transition
                ${
                  isActive
                    ? "border border-green-600 text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button className="ml-3 flex items-center gap-2 bg-green-500 hover:bg-black text-white px-5 py-2 rounded-full">
            Book Consult
            <ArrowUpRight size={18} />
          </button>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full font-medium
                ${
                  isActive
                    ? "border border-green-600 text-green-600"
                    : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
