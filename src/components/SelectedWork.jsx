import React from "react";
import { Link } from "react-router-dom";

export default function SelectedWork() {
  return (
    <section
      className="text-white py-24 px-10 bg-cover bg-center relative"
      id="work"
      style={{ backgroundImage: "url(/bg_2.avif)" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-6xl font-extrabold mb-6 text-white"
          style={{ fontFamily: "Bricolage Grotesque" }}
        >
          Selected Work
        </h2>
        <p className="text-gray-200 text-xl mb-16">
          Work that reflects how I think, design, and create.
        </p>

        <div className="space-y-30 lg:space-y-12">
          {/* Motion Design Card */}
          <div className="bg-gradient-to-bl  from-white to-blue-200 backdrop-blur-lg text-black rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-110 hover:rotate-2 transition-transform duration-300 cursor-pointer h-92">
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-sm text-gray-500">2025 </p>
              <h3 className="text-2xl font-bold">Code Tracker</h3>
              <p className="text-gray-700">
                Code Tracker is a web platform that helps students and
                developers track coding practice, monitor progress, and stay
                motivated through structured logging and consistency.
              </p>
              <a
                href="https://www.figma.com/design/EYLi4pEqgkyRjRdWxhk4N6/Coading-platform-tracker?node-id=0-1&t=OSknbNHFVqqA2bzq-1"
                target="_blank"
                className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition cursor-pointer"
              >
                View More
              </a>
            </div>
            <div className="md:w-1/2 h-full">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 h-full flex items-center justify-center">
                <img
                  src="/work/ct.png"
                  alt="CpdeTracker"
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Visual Design Card */}
          <div className="bg-gradient-to-br from-yellow-100 via-50% to-white backdrop-blur-lg text-black rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-110 hover:-rotate-1 transition-transform duration-300 cursor-pointer h-92">
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-sm text-gray-500">2025</p>
              <h3 className="text-2xl font-bold">Koyya</h3>
              <p className="text-gray-700">
                Koyya.in is a dual-vertical website showcasing technology
                solutions (web, mobile, IoT) and agribusiness offerings (coffee
                products, marketing services).
              </p>

              <a
                href="https://www.figma.com/design/kRA8gbkAk3oAtxby774wbP/KOYYA?node-id=0-1&t=OSknbNHFVqqA2bzq-1"
                target="_blank"
                className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition cursor-pointer"
              >
                View More
              </a>
            </div>
            <div className="md:w-1/2 h-full">
              <div className="bg-gradient-to-br from-orange-400  to-red-500 rounded-2xl p-6 h-full flex items-center justify-center relative">
                <img
                  src="/work/koyya.png"
                  alt="Koyya"
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Visual Storytelling Card */}
          <div className="bg-gradient-to-br from-white via-50% to-green-200 backdrop-blur-sm text-black rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-110 hover:rotate-1 transition-transform duration-300 cursor-pointer h-92">
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-sm text-gray-500">2025</p>
              <h3 className="text-2xl font-bold">ExaMate</h3>
              <p className="text-gray-700">
                ExaMate is a web and mobile system that automates exam hall
                allocations and related processes, reducing errors and saving
                time for college administrators
              </p>
              <a
                href="https://www.figma.com/design/HdQPlEQ2TZkApY4dQeep4P/ExamMate?node-id=50-1638&t=OSknbNHFVqqA2bzq-1"
                target="_blank"
                className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition cursor-pointer"
              >
                View More
              </a>
            </div>
            <div className="md:w-1/2 h-full">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-6 h-full flex items-center justify-center">
                <img
                  src="/work/examate.png"
                  alt="Examate"
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Visual Storytelling Card */}
          <div className="bg-gradient-to-br from-violet-200 via-50% to-white backdrop-blur-lg text-black rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-110 hover:-rotate-1 transition-transform duration-300 cursor-pointer h-92">
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-sm text-gray-500">2024 – 2025</p>
              <h3 className="text-2xl font-bold">MeatBox</h3>
              <p className="text-gray-700">
                MeatBox is a mobile app for hassle-free fresh meat delivery,
                offering chicken, mutton, and eggs straight to your doorstep
                with guaranteed quality and speed.
              </p>
              <a
                href="https://www.figma.com/design/7YuQa9Ep7sQ64R3wlAx5M8/Meat-Box?node-id=0-1&t=OSknbNHFVqqA2bzq-1"
                target="_blank"
                className="px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition cursor-pointer"
              >
                View More
              </a>
            </div>
            <div className="md:w-1/2 h-full">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 h-full flex items-center justify-center">
                <img
                  src="/work/meatbox.png"
                  alt="MeatBox"
                  className="w-full h-auto max-h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
