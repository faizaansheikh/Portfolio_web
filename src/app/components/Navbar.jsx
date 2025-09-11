'use client'
import React, { useState } from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import ToggleTheme from './ToggleTheme';
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from 'next-themes';

function Navbar() {
    const [active, setActive] = useState("main");
    const { theme } = useTheme();

    const navLists = [
        { label: 'Home', link: 'main' },
        { label: 'Services', link: 'service' },
        { label: 'Experience', link: 'career' },
        { label: 'Skills', link: 'skills' },
        { label: 'Certifications', link: 'education' },
        { label: 'Projects', link: 'projects' },
        { label: 'Contact', link: 'contact' },
    ]

    const handleLinks = (id) => {
        setActive(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <div style={{ backgroundColor: MainColor }} className='hidden md:flex w-full px-22 h-[80px] justify-between fixed z-20'>
                <div className='flex items-center'>
                    <div className='bg-[blue] w-[90px] h-full'></div>
                </div>
                <div className='flex items-center w-auto h-full'>
                    <ul className='flex items-center '>
                        {navLists.map((x, i) => (
                            <li
                                key={i}
                                className={`text-[16px] px-4 cursor-pointer ${theme === 'dark' ? 'hover:text-[whitesmoke]' : 'hover:text-[black]'}  hover:scale-105 group 
                                    ${active === x.link && theme === 'dark' ? "text-[whitesmoke] " : "text-gray"}`}
                                onClick={() => handleLinks(x.link)}
                            >
                                <span
                                    style={{ color: MainBtn }}
                                    className={`font-bold pr-1 text-[18px] transition-opacity duration-300 
                                        ${active === x.link ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                                >
                                    {"<"}
                                </span>
                                {x.label}
                                <span
                                    style={{ color: MainBtn }}
                                    className={`font-bold pl-1 text-[18px] transition-opacity duration-300 
                                        ${active === x.link ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                                >
                                    {"/>"}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div style={{ backgroundColor: MainLightColor }} className=' w-[80px] px-6 h-full flex items-center justify-center cursor-pointer'>
                        <ToggleTheme />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: MainColor }} className='w-full h-[80px] flex justify-between  px-4 md:hidden fixed z-20'>
                <div className='flex items-center'>
                    <div className='bg-[blue] w-[90px] h-full'></div>
                </div>
                <div>
                    <div className='w-[90px] h-full flex items-center justify-center'>
                        <GiHamburgerMenu size={20} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
