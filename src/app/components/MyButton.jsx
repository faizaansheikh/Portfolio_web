'use client'
import React from 'react'
import { MainBtn } from '../utils'

function MyButton(props) {
  const { label, type, className, size, submit, Click } = props
  return (
    <button
      type={submit}
      onClick={Click}
      style={{
        fontSize: size ? size : '15px', 
        // backgroundColor: type === 'fill' ? MainBtn : 'transparent',
        border: type === 'fill' ? `` : `1px solid ${MainBtn}`
      }}
      // className={type === 'fill' ? `${className}  bg-[] text-[white] px-3 py-2  font-light  cursor-pointer 
      //        border-1 border-transparent 
      //        hover:bg-transparent hover:text-[white] hover:border-[#141222] 
      //        transition-all duration-300 text-nowrap w-[200px]` :
      //   `${className} w-[200px] bg-[transparent] text-[#0EBAB1] px-3 py-2  font-light  cursor-pointer 
      //        border-1 border-[#141222] 
      //        hover:bg-[#0EBAB1] hover:text-[white] hover:border-transparent
      //        transition-all duration-300 text-nowrap`
      // }
      className={`${className} cursor-pointer px-8 py-2 rounded-[18px] transition-all duration-300 ${type === 'fill' ?
        `bg-[#5d2bbbff] hover:bg-transparent hover:border hover:border-[#5d2bbbff]`
        :
        `hover:bg-[#5d2bbbff] bg-transparent hover:border hover:border-[whitw]`
        } `}
    >
      {label}
    </button>


  )
}

export default MyButton