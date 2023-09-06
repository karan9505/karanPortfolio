import React from 'react'

export default function ContactForm() {

 const hideContactForm = () => {
  document.getElementById('contactFormLeft').style.transform = 'translateX(-100%)';
  document.getElementById('contactFormRight').style.transform = 'translateX(100%)';
  document.getElementById('contactFormMainWrap').setAttribute('class', 'fixed top-[5%] lg:left-[35%] h-[90%] lg:w-[30%] left-[5%] w-[90%] z-[3] animate__animated wow animate__zoomOut rounded-3xl grid bg-cover bg-no-repeat bg-center')
  setTimeout(() => {
   document.getElementById('contactFormMainWrap').style.display = 'none';
  },500)
  
 }

 return (
  <>
   <div className='fixed top-0 left-[-50%] h-screen w-[50%] bg-[rgba(0,0,0,0.9)] z-[2]' id="contactFormLeft"> 
   </div>

   
   
   <div id='contactFormMainWrap' className='fixed top-[5%] lg:left-[35%] h-[90%] lg:w-[30%] left-[5%] w-[90%] z-[3] animate__animated wow animate__zoomIn rounded-3xl grid bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url(../Images/ContactBack.jpg)' }}>
    <div className='absolute top-[2%] left-[2%] h-[96%] w-[96%] overflow-auto'>
     <div className='absolute top-0 left-0  h-[100%] w-[100%] flex flex-col items-center justify-around text-xl text-white'>
      <h1 className='text-3xl wow animate__animated animate__flash animate__infinite'>{'<contactForm/>'}</h1>

      <div id='contactName' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInLeft'>
       <label htmlFor='fullName' className='mb-3'>{'<your-Full-Name/>'}</label>
       <input type='text' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800' placeholder='name.......'></input>
      </div>

      <div id='contactPhone' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInRight'>
       <label htmlFor='fullName' className='mb-3'>{'<your-Phone-Number/>'}</label>
       <input type='number' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800' placeholder='phone.......'></input>
      </div>

      <div id='contactEmail' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInLeft'>
       <label htmlFor='fullName' className='mb-3'>{'<your-Email-Address/>'}</label>
       <input type='text' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800' placeholder='e-mail.......'></input>
      </div>

      <div id='contactMessage' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInRight'>
       <label htmlFor='fullName' className='mb-3'>{'<operation-Details/>'}</label>
       <textarea type='text' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800' placeholder='message.......'></textarea>
      </div>
      <button id='contactSend'>SEND</button>
     </div>
     <div className='absolute top-[100%] left-0 bg-red-500 h-[100%] w-[100%]'></div>
    </div>
   </div>





   <div className=' fixed top-0 left-[100%] h-screen w-[50%] bg-[rgba(0,0,0,0.9)] z-[2]' id="contactFormRight">
    <img src='../Images/X.png' className='absolute h-[40px] w-[40px] p-2 bg-white right-5 top-5  rounded-lg' id='X' onClick={()=>{hideContactForm()}}></img>
   </div>
   </>
    
  )
}
