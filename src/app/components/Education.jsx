import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import { MdWork } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
function Education() {
    let arr = [
        {
            date: '2023-2024',
            title: 'Bachelors In Business And Information Technology',
            subtitle: 'Virtual University Of Pakistan',
            p: 'Currently pursuing a Bachelors degree in Information Technology. As a third-year student, Im building a strong foundation in algorithms, data structures, software engineering, and computer networks.',
            icon: <GiGraduateCap color={MainBtn} size={18} />
        },
        {
            date: '2023-2024',
            title: 'Intermediate',
            subtitle: 'Govt Degree Boys College',
            p: 'I have completed my Intermediate in Pre-Engineering',
            icon: <GiGraduateCap color={MainBtn} size={18} />
        },
        {
            date: '2023-2024',
            title: 'Matriculation',
            subtitle: 'Jennings Private Secondary School',
            p: 'I have completed my Matriculation in Computer Science',
            icon: <GiGraduateCap color={MainBtn} size={18} />
        },
    ];

    return (
        <div style={{ backgroundColor: MainColor }} className="w-full h-auto flex flex-col items-center pb-12">
            {/* Heading */}
            <div className="flex flex-col px-6 sm:px-12 pt-16 sm:pt-20">
                <p style={{ color: MainBtn }} className="text-center text-2xl sm:text-4xl font-bold">Education & Certifications</p>
                <p className="text-center text-sm sm:text-lg py-2">
                    My academic journey and professional qualifications that validate my expertise. 🎓
                </p>
            </div>

            {/* Vertical Steps */}
            <div className="relative w-full sm:w-[80%] mt-6 md:mt-10 px-4 sm:px-0">
                {/* Vertical line (only visible on medium+) */}
                <div className="hidden sm:block absolute left-5 top-0 bottom-0 w-[1px] bg-gray-600"></div>

                {arr.map((x, i) => (
                    <div
                        key={i}
                        className="relative flex flex-col sm:flex-row items-start mb-10"
                    >

                        {/* Step Icon */}
                        <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#080711] border border-gray-500">
                            {x.icon}
                        </div>

                        {/* Box Content */}
                        <div className="flex justify-between sm:ml-8 mt-4 sm:mt-0 bg-[#080711] border border-[#44444E] rounded-[10px] p-4 w-full">


                            <div>
                                <div className="text-white font-bold text-lg sm:text-xl pt-2 pb-1">{x.title}</div>
                                <div style={{ color: MainBtn }} className=" text-md sm:text-[18px] pt-0 pb-1">{x.subtitle}</div>
                                {/* <span className='pr-2'>{x.subtitle}</span> */}
                                <div className="text-gray-400 text-sm sm:text-base">{x.p}</div>
                            </div>
                            <div className='w-[200px] flex justify-end'>

                                <span style={{ backgroundColor: '', color: MainBtn }} className='text-nowrap p-1 rounded-[5px]  text-center text-sm'> {x.date} </span>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
