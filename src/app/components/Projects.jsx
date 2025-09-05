import React from 'react'
import { MainBtn, MainLightColor } from '../utils'
import img1 from '../images/c1.png'
import MyButton from './MyButton'
import Image from 'next/image'

function Projects() {
    let arr = [
         {
            title: 'Inventory Management System',
            desc: 'Introducing our car renting system: effortlessly book the perfect car for any occasion. This platform offers a diverse selection of vehicles with detailed descriptions and photos. Simply choose, book, and go! our React-powered admin panel streamlines operations. Manage bookings, update listings, and monitor performance from one centralized hub',
            techs: ['Next.js','Tailwind CSS', 'Antd','PostgreSql'],
            demo: '',
            code: '',
            img: img1
        },
        {
            title: 'Car Renting System',
            desc: 'Introducing our car renting system: effortlessly book the perfect car for any occasion. This platform offers a diverse selection of vehicles with detailed descriptions and photos. Simply choose, book, and go! our React-powered admin panel streamlines operations. Manage bookings, update listings, and monitor performance from one centralized hub',
            techs: ['React.js','Node.js', 'MongoDB'],
            demo: '',
            code: '',
            img: img1
        },
        {
            title: 'Business Website for Az Scientific Solutions',
            desc: 'A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey. Explore the convergence of functionality and aesthetics as you delve into our meticulously designed interface.',
            techs: ['HTML 5', 'CSS 3','React.js'],
            demo: '',
            code: '',
            img: img1
        },
         {
            title: 'Hotel Website',
            desc: 'A seamless navigation and stunning design with our website UI, meticulously crafted using React. This dynamic interface features multiple responsive pages, ensuring an optimal viewing experience across devices. Explore a user-friendly interface designed to enhance your browsing journey. Explore the convergence of functionality and aesthetics as you delve into our meticulously designed interface.',
            techs: ['HTML 5', 'CSS 3','React.js'],
            demo: '',
            code: '',
            img: img1
        },
        {
            title: 'Weather App',
            desc: 'Explore the worlds weather with our innovative Weather App, meticulously crafted using React and integrated with a robust API. This user-friendly application provides real-time weather updates, forecasts, and intuitive visuals, all tailored for your convenience our responsive design ensures a seamless experience across devices.',
            techs: ['HTML 5', 'CSS 3', 'Javascript','React.js'],
            demo: '',
            code: '',
            img: img1
        },
         {
            title: 'Expense Tracker App',
            desc: 'Our project is an innovative expense management application developed using React and other cutting-edge technologies. This app is designed to streamline the process of tracking and managing expenses, offering users a user-friendly interface and powerful functionalities',
            techs: ['HTML 5', 'CSS 3', 'Javascript','React.js'],
            demo: '',
            code: '',
            img: img1
        }
    ]
    const left = (x) => {
        return <div className="bg-red-500 w-full h-[250px] lg:h-[400px] rounded-[20px]">
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
        return <div className="bg-transparent w-full h-auto flex flex-col justify-center md:px-6 py-6 gap-4">
            {/* Title */}
            <p className="font-bold text-2xl">{x.title}</p>

            {/* Description */}
            <p className="text-gray-300">
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
                <MyButton label="Live Demo" type={'fill'} />
                <MyButton label="Source Code" />
            </div>
        </div>
    }
    return (
        <div
            style={{ backgroundColor: MainLightColor }}
            className="w-full h-auto flex flex-col items-center pb-16"
        >
            {/* Heading */}
            <div className="flex flex-col px-6 sm:px-12 pt-16 sm:pt-20">
                <p
                    style={{ color: MainBtn }}
                    className="text-center text-2xl sm:text-4xl font-bold"
                >
                    Featured Projects 😁
                </p>
                <p className="text-center text-sm sm:text-lg py-2">
                    Check out some of my recent work and the problems I've solved. 🚀
                </p>
            </div>

            {/* Project Card */}
            {
                arr.map((x, i) => (
                    <div
                        key={i}
                        className="hidden bg-transparent w-[85%] my-8 lg:flex flex-col lg:flex-row rounded-lg overflow-hidden items-center shadow-lg"
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
                        className=" bg-transparent w-[85%] my-8 lg:hidden flex flex-col lg:flex-row rounded-lg overflow-hidden items-center shadow-lg"
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
