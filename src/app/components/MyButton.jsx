'use client'
import React from 'react'

function MyButton(props) {
  const { label,type,className,size } = props
  return (
    <button
    style={{fontSize:size?size:'15px',borderRadius:'0'}}
      className={type === 'fill' ? `${className}  bg-[#0EBAB1] text-[white] px-3 py-2  font-light  cursor-pointer 
             border-1 border-transparent 
             hover:bg-transparent hover:text-[black] hover:border-[#0EBAB1] 
             transition-all duration-300 text-nowrap w-[200px]` :
            `${className} w-[200px] bg-[transparent] text-[#0EBAB1] px-3 py-2  font-light  cursor-pointer 
             border-1 border-[#0EBAB1] 
             hover:bg-[#0EBAB1] hover:text-[white] hover:border-transparent
             transition-all duration-300 text-nowrap`
            }
    >
      {label}
    </button>


  )
}

export default MyButton