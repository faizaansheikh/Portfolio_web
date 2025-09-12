import React from 'react'
import { MainBtn, MainLightColor } from '../utils'
import img1 from '../images/1.1.png'
import MyButton from './MyButton'
import Image from 'next/image'

import img2 from '../images/rent.png'
import img3 from '../images/2.png'
import img4 from '../images/3.png'
import img5 from '../images/5.png'
import img6 from '../images/4.png'
import imgp from '../images/port.png'
import img7 from '../images/6.png'
import { useTheme } from 'next-themes'

function Projects() {
       const { theme } = useTheme();
    let arr = [
        {
            title: 'Inventory Management System',
            desc: 'Introducing our car renting system: effortlessly book the perfect car for any occasion. This platform offers a diverse selection of vehicles with detailed descriptions and photos. Simply choose, book, and go! our React-powered admin panel streamlines operations. Manage bookings, update listings, and monitor performance from one centralized hub',
            techs: ['Next.js', 'Tailwind CSS', 'Antd', 'PostgreSql'],
            demo: '',
            code: 'https://github.com/faizaansheikh/Core',
            img: img1
        },
        {
            title: 'Car Renting System',
            desc: 'Introducing our car renting system: effortlessly book the perfect car for any occasion. This platform offers a diverse selection of vehicles with detailed descriptions and photos. Simply choose, book, and go! our React-powered admin panel streamlines operations. Manage bookings, update listings, and monitor performance from one centralized hub',
            techs: ['React.js', 'Node.js', 'MongoDB'],
            demo: 'https://automobile-rental-app-psi.vercel.app/dashboard',
            code: 'https://github.com/faizaansheikh/library_app',
            img: img2
        },
        {
            title: 'Business Website',
            desc: 'A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey. Explore the convergence of functionality and aesthetics as you delve into our meticulously designed interface.',
            techs: ['HTML 5', 'CSS 3', 'React.js'],
            demo: 'https://az-website.vercel.app/',
            code: 'https://github.com/faizaansheikh/Az_website',
            img: img7
        },
        {
            title: 'Weather Tracking App',
            desc: 'A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey. Explore the convergence of functionality and aesthetics as you delve into our meticulously designed interface.',
            techs: ['HTML 5', 'CSS 3', 'React.js'],
            demo: 'https://weathernew-three.vercel.app/',
            code: 'https://github.com/faizaansheikh/weathernew',
            img: img5
        },
        {
            title: 'Hotel Website',
            desc: 'A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey. Explore the convergence of functionality and aesthetics as you delve into our meticulously designed interface.',
            techs: ['HTML 5', 'CSS 3', 'React.js'],
            demo: 'https://xresort-53b181.netlify.app/',
            code: 'https://github.com/faizaansheikh/hotelweb',
            img: img4
        },
        {
            title: 'Portfolio Website',
            desc: 'A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey. Explore the convergence of functionality and aesthetics as you delve into our meticulously designed interface.',
            techs: ['HTML 5', 'CSS 3', 'React.js'],
            demo: 'https://portfolio-faizaan.vercel.app/',
            code: 'https://github.com/faizaansheikh/Portfolio',
            img: imgp
        },
        {
            title: 'Weather App',
            desc: 'Explore the worlds weather with our innovative Weather App, meticulously crafted using React and integrated with a robust API. This user-friendly application provides real-time weather updates, forecasts, and intuitive visuals, all tailored for your convenience our responsive design ensures a seamless experience across devices.',
            techs: ['HTML 5', 'CSS 3', 'Javascript', 'React.js'],
            demo: 'https://weather-a55d2.web.app/',
            code: 'https://github.com/faizaansheikh/Weatherapp',
            img: img3
        },
        {
            title: 'Expense Tracker App',
            desc: 'Our project is an innovative expense management application developed using React and other cutting-edge technologies. This app is designed to streamline the process of tracking and managing expenses, offering users a user-friendly interface and powerful functionalities',
            techs: ['HTML 5', 'CSS 3', 'Javascript', 'React.js'],
            demo: 'https://expenseappx.netlify.app/',
            code: 'https://github.com/faizaansheikh/Expense_app',
            img: img6
        }
    ]
    const left = (x) => {
        return <div className="bg-red-500 w-full h-[250px] lg:h-[400px] rounded-[20px] border border-black">
            <Image
                src={x.img} // put your image inside public folder
                alt="Developer at desk"
                // fill
                className="object-cover w-[100%] h-full rounded-[20px] "
            // sizes="(max-width: 768px) 100vw, 320px"
            />
        </div>
    }
    const right = (x) => {
        return <div className=" w-full h-auto flex flex-col justify-center md:px-6 py-6 gap-4">
            {/* Title */}
            <p className="font-bold text-2xl">{x.title}</p>

            {/* Description */}
            <p className={`${theme === 'light'?'text-gray':'text-gray-300'}`}>
                {x.desc}
            </p>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-3 mt-2">
                {x.techs.map((z, index) => (
                    <span key={index} className="px-4 py-1 rounded-full text-sm font-medium text-white bg-[#1F1D30]">
                        {z}
                    </span>
                ))}


            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
                <a href={x.demo} target='_blank'>
                    <MyButton label="Live Demo" type={'fill'} />
                </a>
                <a href={x.code} target='_blank'>

                    <MyButton label="Source Code" />
                </a>
            </div>
        </div>
    }
    return (
        <div
            style={{ backgroundColor: MainLightColor }}
            className="w-full h-auto flex flex-col items-center pb-16"
            id='projects'
        >
            <div className='flex flex-col  px-12 pt-13  md:pt-16'>
                <p style={{ color: MainBtn }} className='text-center text-4xl font-bold py-2'>Featured Projects</p>
                <p className='text-center  md:text-lg py-2 pb-8'>   Check out some of my recent work and the problems I've solved.  </p>
            </div>
            {/* Heading */}


            {/* Project Card */}
            {
                arr.map((x, i) => (
                    <div
                        key={i}
                        className="hidden  w-[85%] my-8 lg:my-12 lg:flex flex-col lg:flex-row rounded-lg overflow-hidden items-center "
                    >
                        {i % 2 === 0 ? (
                            <>
                                {left(x)}
                                {right(x)}
                            </>
                        ) : (
                            <>
                                {right(x)}
                                {left(x)}
                            </>
                        )}
                    </div>
                ))
            }
            {
                arr.map((x, i) => (
                    <div
                        key={i}
                        className="  w-[85%] my-8 lg:my-12 lg:hidden flex flex-col lg:flex-row rounded-lg overflow-hidden items-center "
                    >
                        <>
                            {left(x)}
                            {right(x)}
                        </>
                    </div>
                ))
            }


        </div>
    )
}

export default Projects
