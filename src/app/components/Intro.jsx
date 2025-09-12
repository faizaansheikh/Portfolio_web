"use client";

import { useEffect, useState } from "react";

export default function Intro({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    //   setShowIntro(false);
    }, 4000); // show intro for 3s
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Intro Screen */}
      {showIntro && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#F5F5F5] text-white z-50 animate-fadeOut">
          <h1 className="text-3xl md:text-5xl font-bold animate-pulse">
            Welcome to my Portfolio
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Built with Next.js (SSR) + TailwindCSS
          </p>
          <div className="mt-8 w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin" />
        </div>
      )}

      {/* Actual App */}
      <div className={`${showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}`}>
        {children}
      </div>
    </div>
  );
}
