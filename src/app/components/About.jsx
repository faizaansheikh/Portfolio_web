import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import Image from 'next/image'
import about from '../images/about.jpg'
import MyButton from './MyButton'
import { MdWork } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import { useTheme } from 'next-themes'
function About() {
    const { theme } = useTheme();
    let arr = [
        {
            date: '2024 - 2025',
            title: 'UI/UX Design',
            p: 'I provide UI/UX Design services focused on creating intuitive, engaging, and user-friendly interfaces that align with business goals and deliver exceptional digital experiences.',
            icon: <MdWork size={20} />
        },
        {
            date: '2024 - 2025',
            title: 'Website Development',
            p: 'I provide Website Development services that focus on building responsive, fast, modern and user-friendly websites designed to enhance your brand’s online presence and engage your audience effectively.',
            icon: <MdWork size={20} />
        },
        {
            date: '2022 - 2024',
            title: 'Web Applications Development',
            p: 'I deliver Web Applications solutions including  dashboards, e-commerce platforms,inventory systems, ERP, SaaS products, and real-time solutions that are scalable, secure, and performance-driven, tailored to meet business requirements while ensuring seamless user experiences across platforms.',
            icon: <MdWork size={20} />
        },
        {
            date: '2025-Present',
            title: 'Business Solutions',
            p: 'I offer Business Solutions that streamline operations, improve efficiency, and drive growth by leveraging technology to solve real-world challenges and support long-term success.',
            icon: <MdWork size={20} />
        },
    ];
    return (

        <div
            style={{ backgroundColor: MainLightColor }}
            className="w-full h-auto flex flex-col justify-center items-center pb-20 overflow-hidden"
        >
           
            <div className="flex flex-col px-4 md:px-12 pt-10 md:pt-16 text-center">
                <p style={{ color: MainBtn }} className="text-3xl md:text-4xl font-bold">
                    About Me
                </p>
                <p className="text-sm md:text-lg py-2">
                    Learn more about my journey, my passion, and what drives me to create
                    outstanding digital experiences.
                </p>
            </div>

          
            <div className="w-full lg:w-[89%] h-auto lg:h-[400px] mt-10 flex flex-col lg:flex-row">
             
                <div className="w-full flex justify-center items-center px-4">
                    <Image
                        src={about}
                        alt="Developer at desk"
                        className="object-cover w-full max-w-[320px] md:max-w-[400px] rounded-[20px] shadow-lg"
                    />
                </div>

            
                <div className="w-full flex flex-col justify-start items-start px-4 md:px-8 py-6">
                    <p className="text-xl md:text-2xl font-bold my-2">My Journey</p>
                    <p
                        className={`text-sm md:text-base ${theme === "light" ? "text-gray-800" : "text-gray-400"
                            }`}
                    >
                        I’m a versatile Software Engineer with 4+ years of industry experience
                        in building scalable, user-focused applications. My expertise spans the
                        full product lifecycle — from system design and database modeling to
                        front-end and back-end development, allowing me to deliver robust,
                        maintainable, and high-performance solutions.
                        <br />
                        <br />
                        I’m passionate about writing clean, efficient code and building
                        applications that combine functionality with seamless user experiences.
                        My approach to development is rooted in problem-solving, continuous
                        learning, and applying best practices to ensure long-term reliability.
                    </p>

                    <div className="mt-6">
                        <a href="/faizan_resume_.pdf" download={"Faizaan_resume.pdf"}>
                            <MyButton label="Download CV" type="" />
                        </a>
                    </div>
                </div>
            </div>

           
            <div className="w-[90%] md:w-[85%] h-auto mt-12 lg:mt-20" id="service">
                <p className="text-center text-xl md:text-3xl pt-8 pb-8 md:pb-12 font-semibold">
                    What I Provide For You
                </p>

                <div className="w-full flex flex-wrap justify-center gap-6">
                    {arr.map((x, i) => (
                        <div
                            key={i}
                            className="w-full sm:w-[350px] lg:w-[400px] xl:w-[500px]"
                        >
                            <div
                                className={`h-auto lg:h-[200px] text-black ${theme === "light" ? "bg-white" : "text-white bg-[#080711]"
                                    } flex flex-col justify-start border border-[#44444E] rounded-[10px] px-5 py-5 shadow-lg hover:shadow-[#5d2bbbff] transition-all duration-500 ease-in-out`}
                            >
                                <div className="font-bold md:text-lg sm:text-xl pt-2 pb-1 flex items-center gap-2">
                                    <span
                                        style={{ backgroundColor: MainBtn }}
                                        className="rounded-full p-2 text-white"
                                    >
                                        {x.icon}
                                    </span>
                                    {x.title}
                                </div>
                                <div
                                    className={`${theme === "light" ? "text-gray-800" : "text-gray-400"
                                        } text-sm md:text-[14px] pt-3`}
                                >
                                    {x.p}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default About