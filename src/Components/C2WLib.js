import React from 'react'

export default function C2WLib() {
  return (
    <>
      <div className='lg:col-span-1 col-span-3 flex items-center justify-center lg:order-4 mt-24 lg:mt-0'>
        <img src='../Images/Code.gif' className='lg:h-64 h-36 rounded-2xl wow animate__animated animate__zoomIn' id="libLogo"></img>
      </div>
      <div className='lg:col-span-2 col-span-3 flex flex-col lg:items-start items-center justify-center lg:order-3'>
        <div className='hidden md:block'>
          <div className='text-purple-500  lg:text-8xl md:text-6xl text-4xl flex lg:my-16 my-10 wow animate__animated animate__shakeY animate__infinite' id="codeLibraryHead" >
            <h1 className='wow animate__animated animate__fadeInLeft delayAnimate'>CODE</h1>
            <h1>-</h1>
            <h1 className='wow animate__animated animate__fadeInRight delayAnimate'>LIBRARY</h1>
          </div>
        </div>
        <div className='block md:hidden'>
          <div className='text-purple-500  lg:text-8xl md:text-6xl text-4xl flex lg:my-16 my-10 wow animate__animated animate__shakeY animate__infinite' id="codeLibraryHead" >
            <h1 className='wow animate__animated animate__fadeInUp delayAnimate'>CODE</h1>
            <h1>-</h1>
            <h1 className='wow animate__animated animate__fadeInUp delayAnimate'>LIBRARY</h1>
          </div>
        </div>
        <div className='text-white flex gap-3 lg:mb-16 mb-10 items-center'>
          <h1>Technologies used</h1>
          <img src='../Images/C.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-2s' alt='Not'></img>
          <img src='../Images/GTK.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-1s' alt='Not'></img>
          <img src='../Images/Glade.png' className='lg:h-6 md:h4 h-3 wow animate__animated animate__bounce animate__infinite animate__delay-0s' alt='Not'></img>
        </div>
        <a href='https://www.youtube.com/watch?v=ZrevNMaIaW4' target='blank'><img src='../Images/YT.png' alt='Not' className='lg:h-6 md:h4 h-5 md:mb-0 mb-2'></img></a>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          "Code Library" stands as a valuable resource for C programming aficionados, boasting an intuitive interface built with GTK and Glade. It's thoughtfully organized into five distinct sections, each dedicated to specific aspects of C programming. The initial section provides a foundational understanding, covering essential concepts, syntax, and best practices—a knowledge base for newcomers and a quick reference for seasoned developers.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          The second section is a treasure trove of numerical programming, offering an array of C code snippets and programs related to number series and patterns. This aids users in honing their mathematical problem-solving skills within the C language.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          Moving forward, the third section immerses users in string manipulation, offering code examples for various operations like concatenation, parsing, and searching.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          The fourth section focuses on array operations, showcasing code snippets for array manipulation and sorting algorithms, enriching users' grasp of array-related tasks.</p>
        <br></br>

        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          The fifth section delves into linked lists, providing C code implementations for singly and doubly linked lists.
        </p>
        <br></br>

        <p className='text-white text-justify wow animate__animated animate__fadeInUp'>
          Remarkably, "Code Library" not only allows users to browse and study code but also empowers them to download code snippets in plain text (txt) format for offline use, promoting active learning and practical application of C programming concepts. This multifaceted project offers a holistic learning experience, making it an indispensable resource for learners and developers alike, fostering a deeper understanding of C programming and enhancing coding proficiency.</p>
        <br></br>
      </div>

    </>
  )
}
