import React from 'react'
import Typed from 'typed.js'
import './Portfolio.css'
import 'animate.css'
import WOW from 'wowjs'
export default function Portfolio() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Karan', 'Khedkar', 'Frontend', 'Backend', 'Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '<'
    });
    return () => {
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <>
      <nav className='grid grid-cols-2 bg-black bg-opacity-25'>
        <div className='flex md:justify-start items-center'>
          <img className='animate__animated animate__backInLeft lg:h-28 h-56' src='../Images/KLogo.gif' alt='Not'></img>
        </div>
        <div className='hidden lg:block'>
          <div className='text-white flex justify-around items-center h-[100%]'>
            <button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl'>Home</button>
            <button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-1s'>About</button>
            <a href='#mySkillsDiv'><button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-2s'>Skills</button></a>
            <button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-3s'>Projects</button>
            <button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-4s'>Contact Me</button>
          </div>
        </div>
      </nav>

      <div className='grid lg:grid-cols-2'>
        <div className='text-white lg:ml-10 lg:mt-10 font-mono p-8'>
          <h1 className='text-4xl font-semibold mb-3 animate__animated animate__backInDown'>Hi!i!i, i am</h1>
          <h1 ref={el} className='inline text-xl md:text-8xl font-extrabold text-purple-500 '></h1>
          <h1 className='my-4 text-2xl animate__animated animate__backInUp'>Welcome to my profile</h1>
          <h1 className='text-justify animate__animated animate__backInRight '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </h1>
        </div>
        <div className='flex items-center justify-center animate__animated animate__backInUp'>
          <img src='../Images/Astro.png' alt='Not' className='h-96 text-justify animate__animated animate__shakeY animate__infinite pt-10 lg:pt-0' id="astroLogo"></img>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mx-20 mx-10 mt-14 lg:pt-5' id="mySkillsDiv">
        <div className='lg:col-span-3 md:col-span-2 col-span-1 my-16 md:justify-start justify-center flex text-white lg:text-6xl'>
          <div className='wow animate__animated animate__bounceInLeft'>skills</div>
          <div><h1>-</h1></div>
          <div className='text-purple-500 wow animate__animated animate__bounceInDown'>And</div>
          <div>-</div>
          <div className='wow animate__animated animate__bounceInRight'>Technologies</div>
        </div>

        <div className='bg-[rgba(217,70,239,0.4)] wow animate__animated animate__zoomInLeft lg:p-10 flex justify-center items-center rounded-2xl'>
          <img src='../Images/C.png' className='h-36 animate__animated animate__bounce animate__infinite'></img>
        </div>
        <div className='bg-[rgba(217,70,239,0.4)] wow animate__animated animate__zoomInUp lg:p-10 flex justify-center items-center rounded-2xl'>
          <img src='../Images/C++.png' className='h-36 animate__animated animate__bounce animate__infinite'></img>
        </div>
        <div className='bg-[rgba(217,70,239,0.4)] wow animate__animated animate__zoomInRight lg:p-10 flex justify-center items-center rounded-2xl'>
          <img src='../Images/Python.png' className='h-36 animate__animated animate__bounce animate__infinite'></img>
        </div>
      </div>
    </>

  )
}
