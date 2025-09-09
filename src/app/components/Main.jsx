import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import Navbar from './Navbar'
import MyButton from './MyButton'
import Image from 'next/image'
import profile from '../images/about.jpg'
function Main() {

  return (
    <>

      <div style={{ backgroundColor: MainColor }} className='w-full h-[80px] flex justify-center'>
        <Navbar />
      </div>



      <div style={{ backgroundColor: MainColor }} className='w-full h-[auto] py-20 md:py-26 flex justify-center'>
        <div className='bg-[] w-[89%] h-full flex justify-center items-center flex-col md:flex-row'>
          <div>
            <p className='text-white my-0  w-[auto] text-[17px] px-0 py-2 ' style={{ color: MainBtn }}>Welcome to my portfolio!</p>
            <h2 className='text-white text-6xl my-6'>Hi! My <br /> name's <span style={{ color: MainBtn }} className='font-bold '>Faizaan</span></h2>
            <p className='text-[18px] text-[gray] my-2 pr-12'>
              Full Stack Developer crafting intuitive software that seamlessly connects real user needs with innovative technology.
              With a strong foundation in UI/UX design and end-to-end development,
              I bring bold ideas to life and deliver impactful, user-centric experiences.
            </p>

            <div className='mt-8'>
              <MyButton label='Click' type='' className='' />
              <MyButton label='Click' type='fill' className='md:ml-4' />
            </div>

          </div>

          <div className='bg-[] w-full h-full  flex flex-col items-center   justify-center mt-16 md:mt-0'>
            <div className='w-[400px] h-[400px] rounded-[100px] '>
              <Image
                src={profile} // put your image inside public folder
                alt="Developer at desk"
                // fill
                className="object-cover w-[100%] h-full rounded-[100px]"
              // sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main