import React from "react";
const skills = [
  {
    title: "UI Design",
    description:
      "Crafting clean, modern interfaces that are visually engaging and consistent.",
  },
  {
    title: "UX Design",
    description:
      "Designing seamless user journeys that prioritize clarity, ease, and satisfaction.",
  },
  {
    title: "Video Editing",
    description:
      "Sharp cuts, smooth transitions, and pacing that keep viewers hooked.",
  },
];

export default function Superpowers() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-7xl font-extrabold mb-6 text-black"
            style={{ fontFamily: "Bricolage Grotesque" }}
          >
            Superpowers
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            The creative skills that power my process, tell better stories, and
            connect with users.
          </p>
        </div>

        <div className="grid grid-cols-11 grid-rows-2 gap-6 h-[600px]">
          <div className="col-span-1 row-span-2 rounded-4xl p-8 flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer"></div>
          {/* Motion Design - Large left */}
          <div className="col-span-4 row-span-1 bg-emerald-300 rounded-4xl p-8 flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer">
            <div className="absolute top-8 right-8 opacity-20">
              <div className="w-32 h-32 border-8 border-emerald-500 transform rotate-45"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {skills[0].title}
              </h3>
              <p className="text-gray-800 text-lg">{skills[0].description}</p>
            </div>
          </div>

          {/* 3D Avatar - Square center */}
          <div className="col-span-2 row-span-1 rounded-4xl flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer">
            <video
              className="absolute -top-2 left-0 w-[105%] h-[105%] object-cover"
              src="/me.mp4"
              loop
              autoPlay
              muted
            />
          </div>

          {/* Visual Storytelling - Large right */}
          <div className="col-span-3 row-span-1 bg-yellow-200 rounded-4xl p-8 flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer">
            <div className="absolute top-8 right-8 opacity-30">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-yellow-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {skills[1].title}
              </h3>
              <p className="text-gray-800 text-lg">{skills[1].description}</p>
            </div>
          </div>

          {/* Video Editing - Medium left bottom */}
          <div className="col-span-2 row-span-1 rounded-4xl flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer">
            <video
              className="absolute -top-1 -left-1 w-[100%] h-[105%] object-cover"
              src="/UIUX.mp4"
              loop
              autoPlay
              muted
            />
          </div>

          {/* After Effects + Tools - Medium center bottom */}
          <div className="col-span-3 row-span-1 bg-gradient-to-br from-purple-300 to-purple-200 rounded-4xl p-6 flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer">
            <div className="absolute bottom-4 right-4 opacity-40">
              <div className="w-20 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
                <div className="w-3 h-3 bg-white rounded-full mx-1"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">
                {skills[2].title}
              </h3>
              <p className="text-gray-800">{skills[2].description}</p>
            </div>
          </div>

          {/* Co-founder Section - Large right bottom */}
          <div className="col-span-4 row-span-1 bg-gradient-to-br from-blue-600 to-blue-800 rounded-4xl p-6 flex flex-col justify-center items-center relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-2xl">Of</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Co-founder</h3>
              <p className="text-blue-200 text-lg font-semibold">Ofzen</p>
              <p className="text-blue-300 text-sm mt-2">
                Building innovative solutions
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-2 rounded-4xl p-8 flex flex-col justify-between relative overflow-hidden hover:scale-90 transition-transform duration-300 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
}
