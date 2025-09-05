import React from 'react'
import { MainLightColor } from '../utils'
import { MdDarkMode } from "react-icons/md";
import ToggleTheme from './ToggleTheme';
function Navbar() {
      const navLists = [
        {label:'Home'},
        {label:'About'},
        {label:'Services'},
        {label:'Contact'},
      ]
  return (
    <div style={{backgroundColor:MainLightColor}} className='w-[85%] h-[80px] flex justify-between fixed z-20'>
        <div className='flex items-center'>
            <div className='bg-[blue] w-[90px] h-full'></div>
            <p className='text-white text-2xl pl-6'>Faizaan</p>
        </div>
        <div className='flex items-center w-auto h-full'>
            <ul className='flex items-center '>
                {navLists.map((x,i)=>(
                    <li key={i} className='text-white text-[17px] px-6'>{x.label}</li>
                ))}
            </ul>
        </div>
        <div className='bg-[blue] w-[90px] h-full flex items-center justify-center cursor-pointer'>
            <ToggleTheme/>
        </div>
       
    </div>
  )
}

export default Navbar