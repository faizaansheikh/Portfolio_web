import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import { MdWork } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
function Career() {
    let arr = [
        {
            date: '2024 - 2025',
            title: 'Diggit Software Solutions LLC',
            p: 'I have worked on Diggit Software solutions for 4 months as a frontend developer',
            icon: <MdWork color={MainBtn} size={18} />
        },
        {
            date: '2022 - 2024',
            title: 'Finosys Private Limited',
            p: 'I have worked on Finosys Private Limited for 3 years as a full stack developer',
            icon: <MdWork color={MainBtn} size={18} />
        },
        {
            date: '2025-Present',
            title: 'Freelance Work',
            p: 'I have worked as a freelancer, during which I developed and delivered two business websites for Az Scientific Solutions',
            icon: <MdWork color={MainBtn} size={18} />
        },
    ];

    return (
        <div style={{ backgroundColor: MainColor }} className="w-full h-auto flex flex-col items-center pb-12" id='career'>
            {/* Heading */}
            <div className='flex flex-col  px-12 pt-13  md:pt-18'>
                <p style={{ color: MainBtn }} className='text-center text-4xl font-bold py-2'>Working Experience</p>
                <p className='text-center  md:text-lg py-2'>Proven track record of delivering scalable and efficient software solutions across diverse industries </p>
            </div>

            {/* Vertical Steps */}
            <div className="relative w-full sm:w-[80%] mt-6 md:mt-10 px-4 sm:px-0">
                {/* Vertical line (only visible on medium+) */}
                <div className="hidden sm:block absolute left-5 top-0 bottom-0 w-[1px] bg-gray-600"></div>

                {arr.map((x, i) => (
                    <div
                        key={i}
                        className="relative flex flex-col sm:flex-row items-start mb-10 "
                    >

                        {/* Step Icon */}
                        <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#080711] border border-gray-500">
                            {x.icon}
                        </div>

                        {/* Box Content */}
                        <div className="sm:ml-8 mt-4 sm:mt-0 bg-[#080711] border border-[#44444E] rounded-[10px] p-4 w-full shadow-lg hover:shadow-[#5d2bbbff] relative hover:bottom-2 transition-all duration-800 ease-in-out">
                            <div className='flex items-center'>
                                <span className='pr-2'><IoIosCode color={MainBtn} size={24} /></span>
                                <span style={{ backgroundColor: MainLightColor, color: MainBtn }} className='p-1 rounded-[5px] w-[100px] text-center text-sm'> {x.date} </span>
                            </div>
                            <div className="text-white font-bold text-lg sm:text-xl pt-2 pb-1">{x.title}</div>
                            <div className="text-gray-400 text-sm sm:text-base">{x.p}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Career;
