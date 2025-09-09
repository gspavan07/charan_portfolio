import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TextGenerateEffect } from "./ui/text-generate-effect";
export default function About() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.avif)" }}
    >
      {/* About Me Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between h-screen mx-auto px-30">
        {/* Text section */}
        <div className="md:w-1/2 space-y-4 mt-10">
          <h1
            className="text-6xl font-extrabold text-black"
            style={{ fontFamily: "Bricolage Grotesque" }}
          >
            About Me
          </h1>
          <p className="text-gray-900 2xl:text-xl font-normal">
            I am a passionate UI/UX designer with a focus on creating intuitive
            and engaging digital experiences. With a background in design and
            technology, I strive to bridge the gap between aesthetics and
            functionality.
          </p>
        </div>

        {/* Image section */}
        <div className="mb-10 md:mb-0 mt-10">
          <img
            src="/me.png"
            alt="Charan Tej Neelam"
            className="w-80 h-80 rounded-[4rem] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2
          className="text-6xl font-extrabold mb-16 text-black"
          style={{ fontFamily: "Bricolage Grotesque" }}
        >
          Work Experience
        </h2>

        <div className="space-y-8">
          {/* Ofzen */}
          <div className="flex justify-between items-start p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Ofzen
              </h3>
              <p className="text-gray-600 text-lg">UI/UX Designer</p>
            </div>
            <span className="text-green-500 font-medium text-lg">
              May 2025 - Present
            </span>
          </div>

          {/* Aditya University */}
          <div className="flex justify-between items-start p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Aditya University
              </h3>
              <p className="text-gray-600 text-lg">Web Designer</p>
            </div>
            <span className="text-green-500 font-medium text-lg">
              May 2025 - June 2025
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
