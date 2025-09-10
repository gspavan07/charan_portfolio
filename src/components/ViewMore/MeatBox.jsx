import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function MeatBox() {
  const flowSteps = [
    {
      title: "Home Page",
      subtitle: "Skill Gaming Platform",
      color: "text-green-600",
      img: "work/meatbox/1.png",
    },
    {
      title: "Onboarding Page",
      subtitle: "100+ Events",
      color: "text-purple-600",
      img: "work/meatbox/2.png",
    },
    {
      title: "Category Page",
      subtitle: "100+ Events",
      color: "text-purple-600",
      img: "work/meatbox/3.png",
    },
  ];

  return (
    <div
      className="px-10 md:py-15 lg:px-30  bg-cover bg-center"
      style={{ backgroundImage: "url(/bg_2.avif)" }}
    >
      <div className="flex flex-col items-center lg:items-center justify-center lg:justify-between">
        {/* Header */}
        <div className="h-screen flex flex-col items-center justify-center text-center px-4">
          <TextGenerateEffect
            words={`MEAT BOX`}
            className="text-7xl lg:text-8xl text-white leading-tight"
          />

          <p className="text-white text-center mt-4 text-xl max-w-xl mx-auto ">
            <p className="text-white text-center mt-4 text-xl max-w-xl mx-auto ">
              MeatBox helps users order fresh meat conveniently and reliably.
            </p>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-1/2 px-8">
          <h3
            className="text-5xl md:text-6xl text-white leading-tight mb-10"
            style={{ fontFamily: "Bricolage Grotesque" }}
          >
            UI Design
          </h3>

          {/* Flow Cards */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white w-full md:w-fit rounded-3xl p-4 shadow-xl hover:scale-105 duration-300 transition-all"
              >
                <div className="text-center mb-2">
                  <p className="text-gray-500 text-md">{step.title}</p>
                </div>
                {/* <div className='h-48'> */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 mb-6 h-64 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-auto max-h-full object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-2xl max-w-8xl mx-auto text-white py-20">
            <h3
              className="text-5xl md:text-6xl text-center text-white leading-tight mb-10"
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              About MeatBox
            </h3>
            <p className="text-lg text-justify">
              MeatBox is a mobile app that makes fresh meat delivery easy and
              convenient. It allows users to order chicken, mutton, and eggs
              directly to their doorstep, ensuring quality and freshness every
              time. MeatBox is redefining how people shop for meat, making it
              hassle-free, reliable, and fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
