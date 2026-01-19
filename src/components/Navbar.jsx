import React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="w-full bg-gray-950 shadow-md fixed top-0 left-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">MovieHub</div>
        <ul className="hidden md:flex space-x-8 text-gray-400 font-medium">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-gray-500"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/favourite"}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-gray-500"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Favourites
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/tv-show"}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-gray-500"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Tv-Shows
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 ${isActive ? "text-white" : "text-gray-500"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
              }
            >
              Contact Us
            </NavLink>
          </li>

        </ul>
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
