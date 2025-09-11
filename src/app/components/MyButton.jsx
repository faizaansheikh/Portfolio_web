'use client'
import React from 'react'
import { MainBtn } from '../utils'
import { useTheme } from 'next-themes';

function MyButton(props) {
  const { label, type, className, size, submit, Click } = props
   const { theme } = useTheme();
  
  return (
    <button
      type={submit}
      onClick={Click}
      style={{
        fontSize: size ? size : '15px', 
       
        border: type === 'fill' ? `` : `1px solid ${MainBtn}`
      }}
      
      className={`${className} cursor-pointer px-8 py-2 rounded-[18px] transition-all duration-300 ${type === 'fill' ?
        `bg-[#5d2bbbff] text-white ${theme === 'light'?'hover:text-black':'text-white'} hover:bg-transparent hover:border hover:border-[#5d2bbbff]`
        :
        `hover:bg-[#5d2bbbff] bg-transparent hover:border hover:border-[white]  ${theme === 'light'?'text-black hover:text-white':'text-white hover:text-white'}`
        } `}
    >
      {label}
    </button>


  )
}

export default MyButton