import React from 'react'

export default function MeatBox() {
    const flowSteps = [
        {
            title: "Home Page",
            subtitle: "Skill Gaming Platform",
            color: "text-green-600",
            img: "work/ct.png"
        },
        {
            title: "Rank Page",
            subtitle: "100+ Events",
            color: "text-purple-600",
            img: "work/rank.jpeg"

        },
        {
            title: "Student Dashboard",
            subtitle: "Before Your Trade",
            color: "text-red-600",
            img: "work/studentcard.jpeg"
        },
        {
            title: "Faculty Dashboard",
            subtitle: "Haa or Naa",
            color: "text-green-600",
            img: "work/facultyDashboard.jpeg"

        },
        {
            title: "Login Page",
            subtitle: "Meet Action",
            color: "text-purple-600",
            img: "work/admindashbroad.jpeg"

        },
        {
            title: "Chech Score Page",
            subtitle: "Win Real Cash",
            color: "text-green-600",
            img: "work/studentdashbroad.jpeg"

        }
    ]

    return (
        <div
            className=" flex flex-col items-between lg:items-center justify-center lg:justify-between h-screen mx-auto px-15 lg:px-30  bg-cover bg-center"
            style={{ backgroundImage: "url(/bg_2.avif)" }}>
            {/* Header */}
            <div>
                <h1 className='text-white text-7xl text-center font-bold mt-30 '>MeatBox</h1>
                <p className="text-white text-center mt-4 text-xl max-w-xl mx-auto ">
                    <p className="text-white text-center mt-4 text-xl max-w-xl mx-auto ">
                        MeatBox delivers fresh meat and eggs to your doorstep quickly and reliably.
                    </p>
                </p>
            </div>


            {/* Main Content */}
            <div className="px-8 py-16 ">

                {/* Flow Cards */}
                <div className="grid grid-cols-6 gap-8">
                    {flowSteps.map((step, index) => (
                        <div key={index} className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 duration-300 transition-all">
                            <div className="text-center mb-6">
                                <p className="text-gray-500 text-md mb-2">{step.title}</p>
                            </div>
                            {/* <div className='h-48'> */}
                            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 mb-6 h-64 flex items-center justify-center relative overflow-hidden">
                                <img src={step.img} alt={step.title} className="w-full h-auto max-h-full object-contain rounded-lg" />
                                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
            <div className=' text-2xl max-w-8xl mx-auto text-white mb-10'>
                <h1 className='text-4xl text-center font-bold mb-4'>About Koyya</h1>
                <p>MeatBox is a mobile app that simplifies fresh meat shopping by delivering chicken, mutton, and eggs straight to users' doorsteps. Designed for busy households, it offers a fast, reliable, and hassle-free alternative to traditional meat buying. Research shows users aged 22–35 prioritize freshness, timely delivery, and variety. MeatBox solves key pain points with a user-friendly interface, quality assurance, and convenient scheduling.</p>
            </div>

        </div>
    )
}