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

export default function Home() {
   const [mounted, setMounted] = useState(false);

  
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="">
      <Main/>
      <About/>
      <Career/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
