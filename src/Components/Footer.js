import React from 'react'

export default function Footer() {
 return (
  <div className='bg-[rgba(0,0,0,0.6)] grid md:grid-cols-3 grid-cols-1 text-white lg:mx-20 md:mx-5 mt-32 md:mb-5 md:rounded-xl md:text-[12px] text-xl'>
   <div className='flex justify-center items-center gap-5 md:my-5 hover:cursor-pointer'>
    <img src='../Images/Location.png' alt='Not' className='h-[30%]'></img>
    <h1>Narhe, Pune</h1>
   </div>
   <div className='flex justify-center items-center gap-5 md:my-5 hover:cursor-pointer'>
    <img src='../Images/Phone.png' alt='Not' className='h-[30%]'></img>
    <h1>7063926776</h1>
   </div>
   <div className='flex justify-center items-center gap-5 md:my-5 hover:cursor-pointer'>
    <img src='../Images/Mail.png' alt='Not' className='h-[30%]'></img>
    <h1>karanskhedkar@gmail.com</h1>
   </div>
   <div className='flex justify-center items-center gap-5 md:mb-5 hover:cursor-pointer'>
    <img src='../Images/LinkedIn.png' alt='Not' className='h-[30%]'></img>
    <h1>Narhe, Pune</h1>
   </div>
   <div className='flex justify-center items-center gap-5 md:mb-5 hover:cursor-pointer'>
    <img src='../Images/Github.png' alt='Not' className='h-[30%]'></img>
    <h1>Narhe, Pune</h1>
   </div>
   <div className='flex justify-center items-center gap-5 md:mb-5 hover:cursor-pointer'>
    <img src='../Images/Leetcode.png' alt='Not' className='h-[30%]'></img>
    <h1>Narhe, Pune</h1>
   </div>
  </div>
 )
}
