'use client'
import React, { useState } from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import { LiaCertificateSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import MyButton from './MyButton';
function Contact() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent("New Contact Form Submission");
        const body = encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`
        );
        window.location.href = `mailto:yourEmail@example.com?subject=${subject}&body=${body}`;
    }
    return (
        <div
            style={{ backgroundColor: MainColor }}
            className="w-full h-auto flex flex-col items-center pb-16"
        >
            {/* Heading */}
            <div className="flex flex-col px-6 sm:px-12 pt-16 sm:pt-20">
                <p
                    style={{ color: MainBtn }}
                    className="text-center text-2xl sm:text-4xl font-bold"
                >
                    Get In Touch
                </p>
                <p className="text-center text-sm sm:text-lg py-2">
                    Have a project in mind or want to discuss? Feel free to reach out!
                </p>
            </div>


            <div className='bg-[] w-[85%] h-[400px] mt-18 flex justify-around items-center flex-col lg:flex-row' >
                <div className='bg-[] w-full h-[400px] ' >
                    <p className='font-bold text-2xl py-3'>Let's Connect 🤝</p>
                    <p className='lg:pr-18 text-[15px] lg:text-[16px] text-[grey] font-[19px]'>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        Messages sent through this form will be delivered directly to my inbox.
                        Feel free to contact me using the form or reach out directly via email.</p>
                    <div className='my-6  '>
                        <div className='flex flex-row items-center gap-3 my-4'>
                            <span>  <MdEmail style={{ backgroundColor: MainLightColor }} className='rounded-[50px] p-2 ' size={35} color={MainBtn} /></span>
                            <span>
                                <p className='font-bold text-md'>Email</p>
                                <p style={{ color: MainBtn }}>faizaanimran333@gmail.com</p>
                            </span>
                        </div>

                        <div className='flex flex-row items-center gap-3 my-4'>
                            <span>  <IoLogoWhatsapp style={{ backgroundColor: MainLightColor }} className='rounded-[50px] p-2 ' size={35} color={MainBtn} /></span>
                            <span>
                                <p className='font-bold text-md'>Phone</p>
                                <p style={{ color: MainBtn }}>+92 319-0169503</p>
                            </span>
                        </div>

                        <div className='flex flex-row items-center gap-3 my-4'>
                            <span>  <FaLocationDot style={{ backgroundColor: MainLightColor }} className='rounded-[50px] p-2 ' size={35} color={MainBtn} /></span>
                            <span>
                                <p className='font-bold text-md'>Location</p>
                                <p style={{ color: MainBtn }}>Karachi,Pakistan</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#080710' }} className=' w-full h-[auto] border border-[#44444E] rounded-[17px] pb-6' >
                    <form onSubmit={handleSubmit} >
                        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-4 px-6 py-3'>
                            <span className='flex flex-col w-full'>
                                <label className='py-2 text-[15px]'>Name</label>
                                <input name='name' onChange={handleChange} type="text" required className=' bg-[#0A0915] pl-3 py-2 rounded-[10px]' placeholder='Your name' style={{ border: `1px solid ${'#44444E'}` }} />
                            </span>
                            <span className='flex flex-col w-full'>
                                <label className='py-2 text-[15px]'>Email</label>
                                <input name='email' onChange={handleChange} type="text" required className=' bg-[#0A0915] pl-3 py-2 rounded-[10px]' placeholder='Your email' style={{ border: `1px solid ${'#44444E'}` }} />
                            </span>

                        </div>
                        <div className='flex flex-row items-center justify-center px-6 py-2'>
                            <span className='flex flex-col w-full'>
                                <label className='pb-2 text-[15px]'>Subject</label>
                                <input name='subject' onChange={handleChange} type="text" required className=' bg-[#0A0915] pl-3 py-2 rounded-[10px]' placeholder='Subject' style={{ border: `1px solid ${'#44444E'}` }} />
                            </span>


                        </div>

                        <div className='flex flex-row items-center justify-center px-6 py-2'>
                            <span className='flex flex-col w-full'>
                                <label className='pb-2 text-[15px]'>Message</label>
                                <textarea cols={6} rows={4} name='message' onChange={handleChange} type="textarea" required className=' bg-[#0A0915] pl-3 py-2 rounded-[10px]' placeholder='Message' style={{ border: `1px solid ${'#44444E'}` }} />
                            </span>


                        </div>
                        <div className='flex flex-row items-center justify-center pt-6 px-6 '>
                            <MyButton label='Send Message' className='w-full ' submit='submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact