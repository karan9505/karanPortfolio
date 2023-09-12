import React from 'react'

export default function ZomatoClone() {
  return (
    <>
      <div className='lg:col-span-1 col-span-3 flex items-center  justify-center lg:order-1 mt-24 lg:mt-0'>
        <img src='../Images/Z.gif' className='lg:h-64 h-36 lg:mt-20 wow animate__animated animate__zoomIn' id="zomatoLogo" alt='Not'></img>
      </div>
      <div className='lg:col-span-2 col-span-3 flex flex-col lg:items-end items-center justify-center lg:order-2'>

        <div className='hidden md:block'>
          <div className='text-purple-500  lg:text-8xl md:text-6xl text-4xl flex lg:my-16 mb-10 items-center wow animate__animated animate__shakeY animate__infinite' id="zoomCloneHead">
            <h1 className='wow animate__animated animate__fadeInLeft delayAnimate'>ZOMATO</h1>
            <h1>-</h1>
            <h1 className='wow animate__animated animate__fadeInRight delayAnimate'>CLONE</h1>
          </div>
        </div>
        <div className='block md:hidden'>
          <div className='text-purple-500  lg:text-8xl md:text-6xl text-4xl flex lg:my-16 mb-10 items-center wow animate__animated animate__shakeY animate__infinite' id="zoomCloneHead">
            <h1 className='wow animate__animated animate__fadeInUp delayAnimate'>ZOMATO</h1>
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

        <a href='https://www.youtube.com/watch?v=mBqUNr6FVvA' target='blank'><img src='../Images/YT.png' alt='Not' className='lg:h-10 md:h-8 h-5 md:mb-0 mb-2'></img></a>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>

          The "Zomato Clone" project is a feature-rich web application designed to replibackendcate the functionality of the popular food delivery and restaurant discovery platform, Zomato. This project is built using the ReactJS framework for the frontend and the Spring Boot framework for the backend, offering a seamless user experience for both admins and users.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          On the admin side, authorized administrators have the ability to manage restaurant listings effortlessly. They can add new restaurants, delete outdated listings, and update restaurant details, including menus. This two-sided admin control ensures that the platform's content remains up-to-date and accurate.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          For users, the Zomato Clone provides a comprehensive set of features. Users can search for restaurants based on various criteria such as cuisine, location, and user ratings. They can also search for specific dishes or types of food, ensuring a personalized experience. Users can place food orders directly through the platform, simplifying the ordering process. After enjoying their meal, they can rate and review their food experiences, contributing to the platform's community-driven feedback system.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          Overall, the "Zomato Clone" project is an impressive example of a ReactJS and Spring Boot application that brings restaurant discovery and food ordering to users, while also providing a powerful admin interface for efficient restaurant management. It's a versatile and user-friendly solution for those looking to replicate the success of popular food delivery platforms.</p>
      </div>
    </>
  )
}
