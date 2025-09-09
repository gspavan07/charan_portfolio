import React from "react";

export default function Footer() {
  return (
    <footer
      className="pt-25 pb-10 lg:pb-0 lg:pt-0 lg:py-20 px-8 bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url(/footer_bg.avif)" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="flex flex-row justify-between items-start lg:mb-16">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2
              className="text-xl lg:text-6xl md:text-7xl font-extrabold mb-2 lg:mb-6 text-white"
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              Let's create together!
            </h2>
            <div className="flex items-center gap-3 text-sm lg:text-xl">
              <a href="mailto:career.charantej@gmail.com">
                career.charantej@gmail.com
              </a>
              <a href="mailto:career.charantej@gmail.com">
                <div className="w-4 h-4 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-2 h-2 lg:w-4 l:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section - Name */}
          <div className="text-right">
            <div
              className="text-2xl lg:text-6xl font-extrabold text-emerald-400"
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              Charan Tej
              <br />
              Neelam
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          {/* Social Links */}
          <div className="flex gap-8 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/charan-tej-neelam-bb0a9a302/"
              className="text-2xl font-bold hover:text-emerald-400 transition"
            >
              in
            </a>
            <a
              href="https://www.figma.com/@charantej2"
              className="text-2xl font-bold hover:text-emerald-400 transition"
            >
              fi
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300">© 2025 Charan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
