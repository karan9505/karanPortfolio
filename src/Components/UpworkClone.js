import React from 'react'

export default function UpworkClone() {
  return (
    <>
      <div className='lg:col-span-1 col-span-3 flex items-center  justify-center lg:order-5 mt-24 lg:mt-0'>
        <img src='../Images/Freelance.gif' className='lg:h-64 h-36 lg:mt-20 wow animate__animated animate__zoomIn' id="upworkLogo"></img>
      </div>
      <div className='lg:col-span-2 col-span-3 lg:order-0 flex flex-col lg:items-end items-center justify-center lg:order-6'>

        <div className='hidden md:block'>
          <div className='text-purple-500  lg:text-8xl md:text-6xl text-4xl flex lg:my-16 mb-10 items-center wow animate__animated animate__shakeY animate__infinite' id="upworkCloneHead">
            <h1 className='wow animate__animated animate__fadeInLeft delayAnimate'>UPWORK</h1>
            <h1>-</h1>
            <h1 className='wow animate__animated animate__fadeInRight delayAnimate'>CLONE</h1>
          </div>
        </div>
        <div className='block md:hidden'>
          <div className='text-purple-500  lg:text-8xl md:text-6xl text-4xl flex lg:my-16 mb-10 items-center wow animate__animated animate__shakeY animate__infinite' id="upworkCloneHead">
            <h1 className='wow animate__animated animate__fadeInUp delayAnimate'>UPWORK</h1>
            <h1>-</h1>
            <h1 className='wow animate__animated animate__fadeInUp delayAnimate'>CLONE</h1>
          </div>
        </div>

        
        <div className='text-white flex gap-3 lg:mb-16 mb-10 items-center stretch'>
          <h1>Technologies used</h1>
          <img src='../Images/React.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-4s' alt='Not'></img>
          <img src='../Images/Spring.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-3s' alt='Not'></img>
          <img src='../Images/HTML.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-2s' alt='Not'></img>
          <img src='../Images/CSS.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-1s' alt='Not'></img>
          <img src='../Images/API.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-0s' alt='Not'></img>
        </div>

        {/* <a href='https://www.youtube.com/watch?v=mBqUNr6FVvA' target='blank'><img src='../Images/YT.png' alt='Not' className='lg:h-6 md:h4 h-5'></img></a> */}
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>

          The "Upwork Clone" project is a versatile online platform, closely resembling the popular freelancing website, Upwork. Built using cutting-edge technologies like Spring Boot for the backend and ReactJS for the frontend, it offers a seamless and responsive user experience.
        </p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          On the client side, users can post job listings, specifying their project requirements, budget, and timeline. They can browse freelancer profiles, evaluate proposals, and hire the most suitable candidate for their project. The platform provides a dedicated project management section for clients to oversee their projects.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          Freelancers, on the other hand, can search and apply for job postings that match their skills and expertise. Once hired by a client, they can commence work and receive payments upon project completion. The platform ensures a secure and transparent payment process.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          Both clients and freelancers have access to personalized account sections where they can manage their profiles, track earnings, and maintain project and transaction records.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          A standout feature of this project is its real-time chat functionality, powered by WebSockets. This enables direct and instant communication between clients and freelancers, ensuring efficient collaboration and project management.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          In summary, the "Upwork Clone" project is a comprehensive freelancing platform that connects clients with skilled professionals, offering secure payments, real-time communication, and a responsive user experience. It's an ideal solution for freelancers and clients looking to collaborate on various projects.</p>
      </div>
    </>
  )
}
