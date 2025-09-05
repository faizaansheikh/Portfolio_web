"use client";
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
function ToggleTheme() {
    const { theme, setTheme } = useTheme();
    console.log('theme',theme);
    
    return (
        <div>
            {/* <button onClick={() => setTheme(theme === "light"  ? "dark" : "light")}>Theme</button>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label=""
                onChange={(e) => setTheme((theme === "light" && e.target.checked) ? "dark" : "light")}
            /> */}
            {/* bg-black text-white px-4 py-2 my-2 */}
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