import React from 'react'

export default function ContactForm() {
 return (
   <>
   <div className='fixed top-0 left-[-50%] h-screen w-[50%] bg-[rgba(0,0,0,0.9)] z-[2]' id="contactFormLeft">
    <div className='wow animate__animated animate__fadeInLeft  absolute bg-white w-[30%] h-[80%] top-[10%] right-0'>
    </div>
   </div>
   <div className=' fixed top-0 left-[100%] h-screen w-[50%] bg-[rgba(0,0,0,0.9)] z-[2]' id="contactFormRight">
    <div className='absolute bg-white w-[30%] h-[80%] top-[10%] left-[-1px]'>
    </div>
   </div>
   </>
    
  )
}
