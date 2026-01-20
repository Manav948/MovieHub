import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-4 transition duration-200 ${
      isActive ? "text-white" : "text-gray-300"
    } hover:text-white`;

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2
                    rounded-2xl border border-white/10 bg-black/30  
                    bg-gradient-to-r to-cyan-600/30
                    backdrop-blur-xl shadow-lg">
      
      <div className="px-6">
        <div className="flex h-14 items-center justify-between">
          
          <div className="text-2xl font-bold text-white tracking-wide">
            MovieHub
          </div>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favourite" className={navLinkClass}>
                Favourites
              </NavLink>
            </li>
            <li>
              <NavLink to="/tv-show" className={navLinkClass}>
                TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-xl rounded-b-2xl">
          <ul className="flex flex-col py-3 text-center font-medium">
            {["/", "/favourite", "/tv-show", "/contact"].map((path, idx) => (
              <li key={idx} onClick={() => setIsOpen(false)}>
                <NavLink to={path} className={navLinkClass}>
                  {["Home", "Favourites", "TV Shows", "Contact Us"][idx]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
