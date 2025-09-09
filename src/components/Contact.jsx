import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
                Interested in working together? Let’s create something amazing!
            </p>
            <a
                href="mailto:example@mail.com"
                className="px-8 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
            >
                Say Hello
            </a>
        </section>
    );
}
