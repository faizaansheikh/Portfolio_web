'use client'
import React, { useState } from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import ToggleTheme from './ToggleTheme';
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from 'next-themes';
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiHyperskill } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { PiCertificateBold } from "react-icons/pi";
import logo from '../images/logo1.png'
import Image from 'next/image';
function Navbar() {
    const [active, setActive] = useState("main");
    const [bar, setBar] = useState(false);
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
        setBar(false)
    }
    const iconRender = (label) => {
        if (label === 'Home') {
            return <FaHome size={18} />
        } else if (label === 'Services') {
            return <MdMiscellaneousServices size={21} />
        } else if (label === 'Experience') {
            return <BsPersonWorkspace size={16} />
        } else if (label === 'Skills') {
            return <SiHyperskill size={16} />
        } else if (label === 'Certifications') {
            return <PiCertificateBold size={18} />
        } else if (label === 'Projects') {
            return <GoProjectSymlink size={18} />
        } else if (label === 'Contact') {
            return <IoMdContact size={18} />
        }
    }
    return (
        <>
            <div style={{ backgroundColor: MainColor }} className='hidden lg:flex w-full px-22 h-[80px] justify-between fixed z-20'>
                <div className='flex items-center'>
                    <div style={{ backgroundColor: MainLightColor }} className='bg-[] w-[80px] h-[70px] p-2'>
                        <Image
                            src={logo}
                            alt="Developer at desk"
                            // fill
                            className="object-fill w-[100%] h-full rounded-[20px]"

                        />
                    </div>
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

            <div style={{ backgroundColor: MainColor }} className='w-full h-[80px] flex justify-between  px-4 lg:hidden fixed z-20'>
                <div className='flex items-center'>
                    <div style={{ backgroundColor: MainLightColor }} className='bg-[] w-[80px] h-[70px] p-2'>
                        <Image
                            src={logo}
                            alt="Developer at desk"
                            // fill
                            className="object-fill w-[100%] h-full rounded-[20px]"

                        />
                    </div>
                </div>
                <div>
                    <div className='w-[90px] h-full flex items-center justify-center'>
                        <span className='px-4 mt-1'> <ToggleTheme size={23} /></span>
                        <GiHamburgerMenu size={23} onClick={() => setBar(!bar)} />
                    </div>
                </div>
            </div>


            <div className='w-full z-19 transition-all duration-300 mt-24 ease-in flex justify-center fixed' style={{ backgroundColor: MainColor, height: bar ? '385px' : 0 }}>
                {bar && <div className='bg-[]  h-full w-[80%] mt-6 '>


                    {navLists.map((x, i) => (
                        <span key={i} className='flex items-center' onClick={() => handleLinks(x.link)}>
                            {iconRender(x.label)}
                            <p className='py-3 text-[17px] px-4'>{x.label}</p>
                        </span>
                    ))}

                </div>}
            </div>
        </>
    )
}

export default Navbar
