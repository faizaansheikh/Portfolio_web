import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import Image from 'next/image'
import about from '../images/about.jpg'
import MyButton from './MyButton'
import { MdWork } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
function About() {
    let arr = [
        {
            date: '2024 - 2025',
            title: 'UI/UX Design',
            p: 'I provide Website Development services that focus on building responsive, modern, and user-friendly websites designed to enhance your brand’s online presence and engage your audience effectively.',
            icon: <MdWork color={MainBtn} size={25} />
        },
        {
            date: '2024 - 2025',
            title: 'Website Development',
            p: 'I provide Website Development services that focus on building responsive, modern, and user-friendly websites designed to enhance your brand’s online presence and engage your audience effectively.',
            icon: <MdWork color={MainBtn} size={25} />
        },
        {
            date: '2022 - 2024',
            title: 'Web Apps Development',
            p: 'I deliver Web Applications solutions that are scalable, secure, and performance-driven, tailored to meet business requirements while ensuring seamless user experiences across platforms.',
            icon: <MdWork color={MainBtn} size={25} />
        },
        {
            date: '2025-Present',
            title: 'Business Solutions',
            p: 'I offer Business Solutions that streamline operations, improve efficiency, and drive growth by leveraging technology to solve real-world challenges and support long-term success.',
            icon: <MdWork color={MainBtn} size={25} />
        },
    ];
    return (

        <div style={{ backgroundColor: MainLightColor }} className='w-full h-[auto]  flex flex-col justify-center items-center pb-22'>
            <div className='flex flex-col  px-12 pt-13  md:pt-18'>
                <p style={{ color: MainBtn }} className='text-center text-4xl font-bold'>About Me</p>
                <p className='text-center  md:text-lg py-2'>Learn more about my journey, my passion, and what drives me to create outstanding <br /> digital experiences. </p>
            </div>

            <div className='bg-[] w-full lg:w-[89%] h-auto lg:h-[400px] mt-12 flex flex-col lg:flex-row'>
                <div className='w-full h-full  flex justify-center items-center px-8'>
                    {/* <div className="w-80 aspect-square rounded-xl overflow-hidden shadow-lg"> */}
                    <Image
                        src={about} // put your image inside public folder
                        alt="Developer at desk"
                        // fill
                        className="object-cover w-[100%] h-full rounded-[20px]"
                    // sizes="(max-width: 768px) 100vw, 320px"
                    />
                    {/* </div> */}
                </div>
                <div className='w-full h-full  flex justify-center items-start flex-col pr-6 py-6 px-8'>
                    <p className='text-2xl font-bold my-2'>My Journey</p>
                    <p className='text-md text-[grey]'> I’m a versatile Software Engineer with 4+ years of industry experience in building scalable, user-focused applications. My expertise spans the full product lifecycle — from system design and database modeling to front-end and back-end development — allowing me to deliver robust, maintainable, and high-performance solutions.


                        <br />
                        <br />
                        I’m passionate about writing clean, efficient code and building applications that combine functionality with seamless user experiences. My approach to development is rooted in problem-solving, continuous learning, and applying best practices to ensure long-term reliability
                        <br />

                        {/* 
                        When I'm not coding or designing, you can find me
                        exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. */}
                    </p>


                    <div className='mt-8'>
                        <MyButton label='Download CV' />
                    </div>
                </div>
            </div>

            <div className='bg-[] w-[85%] h-auto mt-12 lg:mt-26'>
                <p className='text-center text-2xl md:text-3xl pt-8  pb-8 md:pb-12'>What I Provide For You</p>

                <div className='w-full h-auto lg:h-[auto] bg-[] flex justify-around items-center  flex-wrap gap-0'>
                    {arr.map((x, i) => (
                        <div
                            key={i}
                            className={`relative  md:w-[600px] mb-6  `}
                        >



                            {/* Box Content */}
                            <div className="h-auto lg:h-[200px] bg-[#080711] flex items-start flex-col justify-start border border-[#44444E] rounded-[10px] px-5 py-5 w-full shadow-lg hover:shadow-[#5d2bbbff] relative hover:bottom-2 transition-all duration-800 ease-in-out">
                                {/* <div className='flex items-center'>
                                    <span className='pr-2'><IoIosCode color={MainBtn} size={24} /></span>
                                 
                                </div> */}
                                <div className="text-white font-bold text-lg sm:text-xl pt-2 pb-1 flex items-center gap-2" ><span>{x.icon}</span>{x.title}</div>
                                <div className="text-gray-400 text-[12px] lg:text-[14px] pt-3 " >{x.p}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >

    )
}

export default About