import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full py-4 px-5 flex justify-between items-center bg-white/70 backdrop-blur-lg shadow-md rounded-full mt-10 fixed z-50 max-w-[95%] md:max-w-[75%] mx-auto left-0 right-0"
      style={{ fontFamily: "Bricolage Grotesque" }}
    >
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
          ct
        </div>
        <span className="text-xl md:text-2xl font-extrabold text-gray-800 hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300">
          Charan Tej
        </span>
      </Link>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-16 mr-4 text-lg font-extrabold text-gray-800">
        <li>
          <Link
            to="/#work"
            className="hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 p-6 text-lg font-extrabold text-gray-800">
            <li>
              <Link
                to="/#work"
                className="block hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
