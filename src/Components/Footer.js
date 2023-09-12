import React from 'react'

export default function Footer() {
 return (
  <div className='bg-[rgba(0,0,0,0.6)] grid md:grid-cols-3 grid-cols-1 text-white lg:mx-20 md:mx-5 mt-32 md:mb-5 mx-2 mb-2 rounded-xl text-[14px]'>
   <div className='flex justify-center items-center gap-5 md:my-5 hover:cursor-pointer '>
    <img src='../Images/Location.png' alt='Not' className='h-[30%] wow animate__animated animate__zoomIn'></img>
    <a href='http://surl.li/lajth' target='blank' className='wow animate__animated animate__zoomIn'>Narhe, Pune</a>
   </div>

   <div className='flex justify-center items-center gap-5 md:my-5 hover:cursor-pointer'>
    <img src='../Images/Phone.png' alt='Not' className='h-[30%] wow animate__animated animate__zoomIn'></img>
    <h1 className='wow animate__animated animate__zoomIn'>7063926776</h1>
   </div>

   <div className='flex justify-center items-center gap-5 md:my-5 hover:cursor-pointer'>
    <img src='../Images/Mail.png' alt='Not' className='h-[30%] wow animate__animated animate__zoomIn'></img>
    <a href="mailto: karanskhedkar@gmail.com" target='blank' className='wow animate__animated animate__zoomIn'>karanskhedkar@gmail.com</a>
   </div>

   <div className='flex justify-center items-center gap-5 md:mb-5 hover:cursor-pointer '>
    <img src='../Images/Linkedin.png' alt='Not' className='h-[30%] wow animate__animated animate__zoomIn'></img>
    <a href='http://www.linkedin.com/in/karan-s-khedkar' target='blank' className='wow animate__animated animate__zoomIn'>Karan S Khedkar</a>
   </div>

   <div className='flex justify-center items-center gap-5 md:mb-5 hover:cursor-pointer '>
    <img src='../Images/Github.png' alt='Not' className='h-[30%] wow animate__animated animate__zoomIn'></img>
    <a href='https://github.com/karan9505' target='blank' className='wow animate__animated animate__zoomIn'>karan9505</a>
   </div>

   <div className='flex justify-center items-center gap-5 md:mb-5 hover:cursor-pointer '>
    <img src='../Images/Leetcode.png' alt='Not' className='h-[30%] wow animate__animated animate__zoomIn'></img>
    <a href='https://leetcode.com/karanskhedkar/' target='blank' className='wow animate__animated animate__zoomIn'>karanskhedkar</a>
   </div>
  </div>
 )
}
