"use client";
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
function ToggleTheme() {
    const { theme, setTheme } = useTheme();
    console.log('theme',theme);
    
    return (
        <div>
     
            <div
                className=""
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <MdDarkMode size={30} color=''/>
            </div>
        </div>
    )
}

export default ToggleTheme