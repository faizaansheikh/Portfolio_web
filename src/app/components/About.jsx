import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import Image from 'next/image'
import about from '../images/about.jpg'
import MyButton from './MyButton'
function About() {
    return (

        <div style={{ backgroundColor: MainLightColor }} className='w-full h-[auto]  flex flex-col justify-center items-center pb-22'>
            <div className='flex flex-col  px-12 pt-20'>
                <p style={{ color: MainBtn }} className='text-center text-4xl font-bold'>About Me</p>
                <p className='text-center text-lg py-2'>Learn more about my journey, my passion, and what drives me to create outstanding <br /> digital experiences. </p>
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
                    <p className='text-2xl font-bold my-2'>My Journey 🧭</p>
                    <p className='text-md text-[grey]'> I'm a versatile UI/UX designer and software developer with a passion for creating digital experiences that are both beautiful and
                        functional. With a background in computer science and years of experience in the industry,
                        I've developed a holistic approach to product development. My expertise spans the entire product lifecycle, from user research and
                        wireframing to front-end and back-end development.
                        <br />
                        <br />
                        I believe in user-centered design principles and writing clean, maintainable code.
                        <br />
                        <br />

                        When I'm not coding or designing, you can find me
                        exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. </p>


                    <div className='mt-8'>
                        <MyButton label='Download CV' />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default About