import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/SelectedWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Superpowers from "./components/SuperPower";
import SelectedWork from "./components/SelectedWork";
import ToolsSection from "./components/Tools";

function Home() {
  return (
    <>
      <Hero />
      <Superpowers />
      <SelectedWork />
      {/* <ToolsSection /> */}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<SelectedWork />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
