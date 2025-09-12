'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const { theme } = useTheme();
    const cursorRef = useRef(null);
    
    
    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${clientX - 10}px, ${clientY - 10}px, 0)`;
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);


    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 z-[9999] w-7 h-7 rounded-full border-2 ${theme === 'light' ? "border-[white]" : "border-[black]"} opacity-60 pointer-events-none transition-transform duration-75`}
        />
    );
};

export default CustomCursor;