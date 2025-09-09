import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="w-full py-4 px-5 flex justify-between items-center bg-white/70 backdrop-blur-lg shadow-md rounded-full mt-10 fixed z-50 max-w-[75%] mx-auto left-0 right-0"
      style={{ fontFamily: "Bricolage Grotesque" }}
    >
      <Link to="/" className="flex items-center gap-2">
        <div className="w-12 h-12 text-2xl bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
          ct
        </div>
        <span className="text-2xl font-extrabold text-gray-800 hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300">
          Charan Tej
        </span>
      </Link>
      <ul className="flex gap-16 mr-4 text-lg font-extrabold text-gray-800 ">
        <li>
          <a
            href="/#work"
            className="hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            Work
          </a>
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
            href="#resume"
            className="hover:bg-gradient-to-b hover:from-green-400 hover:via-green-500 hover:to-black hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
