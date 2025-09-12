import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import { MdWork } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import Image from 'next/image';
import img from '../images/c1.png'
import img1 from '../images/c2.png'
import img2 from '../images/c3.png'
import { TiTick } from "react-icons/ti";
import { LiaCertificateSolid } from "react-icons/lia";
import { useTheme } from 'next-themes';
function Education() {
    const { theme } = useTheme();
    let arr = [
        {
            date: 'Year 2023 - 2027',
            title: 'Bachelors In Business And Information Technology',
            subtitle: 'Virtual University Of Pakistan',
            p: 'Currently pursuing a Bachelors degree in Information Technology. As a third-year student, Im building a strong foundation in algorithms, data structures, software engineering, and computer networks.',
            icon: <GiGraduateCap color={MainBtn} size={18} />
        },
        {
            date: 'Year 2017 - 2019',
            title: 'Intermediate',
            subtitle: 'Govt Degree Boys College',
            p: 'I have completed my Intermediate in Pre-Engineering',
            icon: <GiGraduateCap color={MainBtn} size={18} />
        },
        {
            date: 'Year 2016',
            title: 'Matriculation',
            subtitle: 'Jennings Private Secondary School',
            p: 'I have completed my Matriculation in Computer Science',
            icon: <GiGraduateCap color={MainBtn} size={18} />
        },
    ];


    let cert = [

        {
            img: img1,
            title: 'React',
            title2: 'HackerRank',
            date: '2023',
            link: 'https://www.hackerrank.com/certificates/68f770a6bb56'
        },
        {
            img: img,
            title: 'Javascript Algorithms And DSA',
            title2: 'freeCodeCamp',
            date: '2022',
            link: 'https://www.freecodecamp.org/certification/Faizaan_sheikh/javascript-algorithms-and-data-structures'
        },
        {
            img: img2,
            title: 'Problem Solving',
            title2: 'HackerRank',
            date: '2023',
            link: 'https://www.hackerrank.com/certificates/93680aba4050'
        }
    ]
    return (
        <div style={{ backgroundColor: MainColor }} className="w-full h-auto flex flex-col items-center pb-12" id='education'>
            {/* Heading */}

            <div className='flex flex-col  px-12 pt-13  md:pt-18'>
                <p style={{ color: MainBtn }} className='text-center text-4xl font-bold py-2'>Education & Certifications</p>
                <p className='text-center  md:text-lg py-2'> My academic journey and professional qualifications that validate my expertise. 🎓 </p>
            </div>






            <div className="relative w-full sm:w-[80%] mt-6 md:mt-10 px-4 sm:px-0">

                <div className="hidden sm:block absolute left-5 top-0 bottom-0 w-[1px] bg-gray-600"></div>

                {arr.map((x, i) => (
                    <div
                        key={i}
                        className="relative flex flex-col sm:flex-row items-start mb-10 "
                    >


                        <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#080711] border border-gray-500`}>
                            {x.icon}
                        </div>


                        <div className={` sm:ml-8 mt-4 sm:mt-0 ${theme === 'light' ? 'bg-[]' : 'bg-[#080711]'} border border-[#44444E] rounded-[10px] p-4 w-full shadow-lg hover:shadow-[#5d2bbbff] relative hover:bottom-2 transition-all duration-600 ease-in-out`}>
                            <div className='flex justify-between items-start'>
                                <div className={`${theme === 'light' ? '' : 'text-white'}  font-bold text-lg sm:text-xl md:pt-1 pb-0`}>{x.title}</div>
                                <span style={{ backgroundColor: '', color: MainBtn }} className='text-nowrap p-0 rounded-[5px]  text-center text-sm'> {x.date} </span>
                            </div>

                            <div>

                                <div style={{ color: MainBtn }} className=" text-md sm:text-[18px] pt-0 pb-1">{x.subtitle}</div>
                               
                                <div className="text-gray-400 text-sm sm:text-base">{x.p}</div>
                            </div>
                          


                        </div>
                    </div>
                ))}
            </div>


            {/* Certificates */}

            <div className='bg-[] h-auto lg:h-[445px] w-full sm:w-[80%] px-8 md:px-0 h-[435px] flex items-center gap-6 flex-col lg:flex-row mt-22 mb-8'>
                {cert.map((x, i) => (
                    <div onClick={() => window.open(x.link)} key={i} className={`cursor-pointer ${theme === 'light' ? 'bg-[]' : 'bg-[#0A0914]'} w-full h-full border border-[#44444E] rounded-[10px] shadow-lg hover:shadow-[#5d2bbbff] relative hover:bottom-2 transition-all duration-800 ease-in-out my-2 lg:my-0`}>
                        <div className='border border-[#44444E] w-full h-[200px] rounded-[10px] relative  overflow-hidden'>
                            <Image
                                src={x.img}
                                alt="Developer at desk"
                                className="object-cover w-full h-full rounded-[10px]"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 hover:bg-black/60 transition-all duration-300 rounded-[10px]" />

                        </div>
                        <div className=' w-full h-[]'>
                            <div className='pl-4 mt-4 '>
                                <LiaCertificateSolid style={{ backgroundColor: MainLightColor }} className='rounded-[50px] p-2 mb-5' size={55} color={MainBtn} />

                                <p className='text-lg my-1 font-bold'>{x.title}</p>
                                <p className='text-lg my-1' style={{ color: MainBtn }}>{x.title2}</p>
                                {<br />}
                                <div className='flex items-center gap-2 my-2'>
                                    <p className={`text-sm ${theme === 'light' ? "text-black" : "text-[grey]"}`}>{x.date}</p>
                                    <span className='px-2 py-1 text-sm rounded-[13px] flex items-center gap-1' style={{ backgroundColor: MainLightColor, color: MainBtn }}>Verified <TiTick /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}




            </div>
        </div>
    );
}

export default Education;
