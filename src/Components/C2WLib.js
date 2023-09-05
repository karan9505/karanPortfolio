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
        <a href='https://www.youtube.com/watch?v=ZrevNMaIaW4' target='blank'><img src='../Images/YT.png' alt='Not' className='lg:h-6 md:h4 h-5'></img></a>
        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>The "Code Library" project is a comprehensive resource for individuals looking to learn and explore the C programming language. This project leverages the power of C for the backend, while utilizing Glade and GTK for creating an intuitive and user-friendly graphical user interface (GUI). It serves as an excellent tool for programmers, both beginners and experienced, who seek to enhance their knowledge and coding skills in C.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>
          Theoretical Knowledge: The project's first section offers a rich repository of theoretical knowledge related to C programming. Users can access explanations, concepts, and examples covering the fundamentals of C, making it an ideal starting point for newcomers.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>
          Number Series: In the second section, users can find a collection of C code snippets and programs related to number series. These codes range from basic arithmetic sequences to more complex numerical patterns, providing valuable insights into mathematical programming in C.</p>
        <br></br>
        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>
          String Manipulation: The third section focuses on string manipulation. Users can explore a variety of C code examples related to string handling, including string concatenation, parsing, and searching, among others.</p>
        <br></br>

        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>
          Array Operations: The fourth section is dedicated to arrays. It contains a diverse set of C code samples showcasing array manipulation, sorting algorithms, and other array-related operations.
        </p>
        <br></br>

        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>
          Code Browsing: Users can easily navigate through the various sections of the project, exploring theoretical knowledge, number series, string manipulation, array operations, and linked lists.</p>
        <br></br>

        <p className='text-white text-justify wow animate__animated animate__bounceInUp'>
          Code Download: To facilitate learning and code usage, the project allows users to download any code snippet or program they find interesting or useful. The code can be downloaded in a plain text format (txt), making it easily accessible for offline reference and practice.</p>
      </div>

    </>
  )
}
