'use client'
import React, { useState } from 'react'
import { MainBtn, MainLightColor } from '../utils'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from 'next/image';
import logo from '../images/logo1.png'
function Footer() {
    // const [count, setCount] = useState(0)
    // function normal() {
    //     setCount(count + 1)
    //     setTimeout(() => {
    //         setCount(count + 1)
    //     }, 1000);
    // }
    return (
        <div style={{ backgroundColor: MainLightColor }} className='w-full h-[auto]  pt-12 pb-6'>
            <div className='bg-[] px-10 md:px-16  h-[auto] flex justify-between md:items-center flex-col md:flex-row'>
                <div>
                    <div style={{ backgroundColor: MainLightColor }} className='bg-[] w-[auto] h-[] flex items-center gap-3 py-2'>
                        <Image
                            src={logo}
                            alt="Developer at desk"
                            // fill
                            className="object-fill w-[10%] h-full rounded-[20px]"

                        />
                    <p style={{ color: MainBtn }} className='font-bold text-2xl py-2' >Faizaan Imran </p>
                    </div>
                    <p className='text-[grey] text-sm'>Creating solutions that inspire. <br />
                        Passionate about clean code, user-focused design, and impact-driven tech <br />
                        Built by Faizaan Imran | Software Engineer & Startup Enthusiast</p>
                </div>

                <div className='flex gap-6 mt-6 md:mt-0'>
                    <span ><FaGithub size={20} className='hover:scale-109 cursor-pointer' /></span>
                    <span><FaLinkedin size={20} className='hover:scale-109 cursor-pointer' /></span>
                    <span><IoMail size={20} className='hover:scale-109 cursor-pointer' /></span>

                </div>

            </div>

            <div className='flex justify-center mt-6 mb-5'>
                <div className='bg-[#44444E] w-[89%] h-[1px] '></div>
            </div>


            <p className='text-center pt-1 text-[grey] text-sm'>© 2025 Faizaan Imran. All rights reserved.</p>
        </div>
    )
}

export default Footer