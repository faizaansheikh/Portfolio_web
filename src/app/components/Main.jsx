import React from 'react'
import { MainBtn, MainColor, MainLightColor } from '../utils'
import Navbar from './Navbar'
import MyButton from './MyButton'
import Image from 'next/image'
import profile from '../images/main1.jpg'
import { useTheme } from 'next-themes'
function Main() {
  const { theme, setTheme } = useTheme();
  const handleLinks = (id) => {
  
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
   
  }
  return (
    <>

      <div style={{ backgroundColor: MainColor }} className='w-full h-[80px] flex justify-center'>
        <Navbar />
      </div>



      <div
        id='main'
        style={{
          backgroundImage: theme === 'light' ? "url('/main_light.jpg')" : "url('/main.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="w-full h-auto py-20 md:py-26 flex justify-center"
      >
        <div className="w-[89%] h-full flex justify-center items-center flex-col md:flex-row">
          <div>
            <p
              className="text-white my-0 w-auto text-[17px] px-0 py-2"
              style={{ color: MainBtn }}
            >
              Welcome to my portfolio!
            </p>

            <h2 className={`${theme === 'light' ? "text-black" : "text-white"} text-6xl my-6`}>
              Hi! My <br /> name's
              <span style={{ color: MainBtn }} className="font-bold"> Faizaan</span>
            </h2>

            <p className={`text-[18px] ${theme === 'light' ? "text-gray" : "text-gray-400"}  my-2 pr-12`}>
              Full Stack Developer specializing in building intuitive, user-focused software solutions that bridge real-world needs with innovative technology. Skilled in UI/UX design and end-to-end development, I transform bold ideas into seamless, impactful digital experiences that drive business success
            </p>

            <div className="mt-8">
              <MyButton label="Get In Touch" type="fill" Click={()=>handleLinks('contact')} />
              <MyButton label="Browse Projects" type="" className="md:ml-4"  Click={()=>handleLinks('projects')}/>
            </div>
          </div>

          <div className="w-full h-full flex flex-col items-center justify-center mt-16 md:mt-0">
            <div className="w-[400px] h-[400px] rounded-[100px]">
              <Image
                src={profile}
                alt="Developer at desk"
                style={{ border: `3px dashed ${'grey'}` }}
                className="object-cover w-full h-full rounded-[100%]  p-6"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Main