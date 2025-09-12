"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const { theme, resolvedTheme } = useTheme(); // resolvedTheme handles "system"
  console.log('fwefwe');
  
  const cursorRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Ensure hydration matches theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX - 10}px, ${
          clientY - 10
        }px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!mounted) return null; // prevent mismatch during hydration

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[9999] w-7 h-7 rounded-full border-2 ${
        resolvedTheme === "light" ? "border-[black]" : "border-[white]"
      } opacity-60 pointer-events-none transition-transform duration-75`}
    />
  );
};

export default CustomCursor;
