"use client";
import Main from "@/app/components/Main";
import { useEffect, useState } from "react";
import About from "./components/About";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // show intro for 3s
    setMounted(true)
    return () => clearTimeout(timer);
  }, []);




  if (!mounted) return null;
  return (
    <div className="">
      <div className="relative min-h-screen">
        {/* Intro Screen */}
        {showIntro ? (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#F5F5F5] text-black z-50 animate-fadeOut">
            <h1 className="text-3xl md:text-5xl font-bold animate-pulse">
              Welcome to my Portfolio
            </h1>
            <p className="mt-4 text-lg opacity-80">
              Built with Next.js (SSR) + TailwindCSS
            </p>
            <div className="mt-8 w-12 h-12 border-4 border-t-transparent border-black rounded-full animate-spin" />
          </div>
        ) : <div className={`${showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}`}>
          <Main />
          <About />
          <Career />
          <Skills />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </div>}



      </div>


    </div>
  );
}
