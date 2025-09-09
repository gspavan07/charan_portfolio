import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { TextGenerateEffect } from "./ui/text-generate-effect";
export default function Hero() {
  return (
    <section
      className=" flex flex-col-reverse md:flex-row items-center justify-between h-screen mx-auto px-30 rounded-xl shadow-sm bg-cover bg-center"
      style={{ backgroundImage: "url(/bg.avif)" }}
    >
      {/* Text section */}
      <div className="md:w-1/2 space-y-4 mt-10">
        <h2
          className="text-xl text-gray-700 2xl:text-3xl"
          style={{
            fontFamily: "Satoshi Bold, Satoshi Bold Placeholder, sans-serif",
          }}
        >
          Hello! I’m <span className="font-semibold">Charan Tej Neelam</span> 👋🏻
        </h2>
        <TextGenerateEffect
          words="Web & Mobile App Designer"
          className="text-5xl md:text-6xl text-black leading-tight 2xl:text-8xl"
          style={{ fontFamily: "Bricolage Grotesque" }}
        />

        <p
          className="text-gray-800 font-medium 2xl:text-2xl"
          style={{
            fontFamily: "Satoshi Bold, Satoshi Bold Placeholder, sans-serif",
          }}
        >
          at Ofzen, Kakinada, India
        </p>
        <p
          className="text-gray-600 2xl:text-xl"
          style={{
            fontFamily: "Satoshi Medium, sans-serif",
          }}
        >
          Passionate about crafting intuitive digital experiences.
        </p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full text-sm hover:bg-green-600 transition">
          OPEN TO WORK
        </button>
      </div>

      {/* Image section */}
      <div className="mb-10 md:mb-0 mt-10">
        <img
          src="/me.png"
          alt="Charan Tej Neelam"
          className="w-80 h-80 rounded-[4rem] object-cover shadow-lg"
        />
      </div>

      {/* Rotating Explore More */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="relative w-40 h-40">
          <svg
            className="w-40 h-40 animate-spin"
            style={{ animationDuration: "20s" }}
            viewBox="0 0 100 100"
          >
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
              stroke="none"
            />
            <text
              className="text-xs fill-gray-400"
              style={{
                fontFamily: "Satoshi Medium",
                letterSpacing: "1px",
              }}
            >
              <textPath href="#circle">EXPLORE MORE • EXPLORE MORE •</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <IoArrowDownCircleOutline size={40} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
