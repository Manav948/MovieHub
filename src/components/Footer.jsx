import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 mt-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">MovieHub</h2>
          <p className="text-gray-00 text-sm font-bold">
            Your go-to platform for discovering top-rated movies and shows. Powered by passion and popcorn.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-x-4 text-md text-gray-400 ">
            <Link to="/" className="hover:text-white cursor-pointer">Home</Link>
            <Link to="/" className="hover:text-white cursor-pointer">Movies</Link>
            <Link to="/tv-show" className="hover:text-white cursor-pointer">TV Shows</Link>
            <Link to="/contact"className="hover:text-white cursor-pointer">Contact</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 ">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-sky-400">Twitter</a>
            <a href="#" className="hover:text-pink-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs hover:text-white cursor-pointer duration-300">
        &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
