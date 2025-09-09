import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import { MdDarkMode } from "react-icons/md";
import ToggleTheme from './ToggleTheme';
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
    const navLists = [
        { label: 'Home' },
        { label: 'About' },
        { label: 'Experience' },
        { label: 'Skills' },
        { label: 'Certifications' },
        { label: 'Projects' },
        { label: 'Contact' },
    ]
    return (
        <>
            <div style={{ backgroundColor: MainColor }} className='hidden md:flex w-full px-22 h-[80px] justify-between fixed z-20'>
                <div className='flex items-center'>
                    <div className='bg-[blue] w-[90px] h-full'></div>
                    {/* <p className='text-white text-2xl pl-6'>Faizaan</p> */}
                </div>
                <div className='flex items-center w-auto h-full'>
                    <ul className='flex items-center '>
                        {navLists.map((x, i) => (
                            <li
                                key={i}
                                className="text-[lightgrey] text-[16px] px-4 cursor-pointer hover:text-[whitesmoke] hover:scale-105 group"
                            >
                                <span
                                    style={{ color: MainBtn }}
                                    className="font-bold pr-1 text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    {"<"}
                                </span>
                                {x.label}
                                <span
                                    style={{ color: MainBtn }}
                                    className="font-bold pl-1 text-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                {/* <div className='bg-[blue] w-[90px] h-full flex items-center justify-center cursor-pointer'>
            <ToggleTheme/>
        </div> */}

            </div>

            <div style={{ backgroundColor: MainColor }} className='w-full h-[80px] flex justify-between  px-4 md:hidden fixed z-20'>
                <div className='flex items-center'>
                    <div className='bg-[blue] w-[90px] h-full'></div>
                    {/* <p className='text-white text-2xl pl-6'>Faizaan</p> */}
                </div>
                <div>
                    <div className='bg-[] w-[90px] h-full flex items-center flex justify-center'><GiHamburgerMenu size={20} /></div>
                </div>
            </div>
        </>
    )
}

export default Navbar