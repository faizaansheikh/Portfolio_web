import React from 'react'
import { MainColor } from '../utils'
import Navbar from './Navbar'
import MyButton from './MyButton'

function Main() {

  return (
    <>
      <div style={{ backgroundColor: MainColor }} className='  hidden md:flex justify-center '>
        <Navbar />
      </div>
      <div style={{ backgroundColor: MainColor }} className='w-full h-[600px]  flex flex-col md:flex-row bg-[]'>


        <div className='bg-[] w-full h-[600px] flex flex-col items-center md:items-start px-12  md:px-24 justify-center'>
          <p className='text-white my-4 bg-[black] w-[auto] px-6 py-2 rounded-[30px] border border-[grey]'>Full Stack Developer</p>
          <h2 className='text-white text-5xl my-2'>Hi! I'm <span>Faizaan Imran</span></h2>
          <p className='text-[18px] text-[gray] my-2'>
            I craft intuitive digital solutions that connect real user needs with impactful innovation.
            With a blend of UI/UX design and full-stack development, I bring bold ideas to life — one
            line of code at a time.
          </p>

          <div className='mt-8'>
            <MyButton label='Click' type='' className=''/>
            <MyButton label='Click' type='fill' className='md:ml-4'/>
          </div>
        </div>


        <div className='bg-[] w-full h-full'></div>

      </div>
    </>
  )
}

export default Main