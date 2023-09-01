import React from 'react'
import Typed from 'typed.js'
import './Portfolio.css'
import 'animate.css'
import WOW from 'wowjs'
import SkillsCard from './Components/SkillsCard'
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
            <a href='#myProjects'><button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-3s'>Projects</button></a>
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
          <img src='../Images/Astro.png' alt='Not' className='h-96 wow animate__animated animate__shakeY animate__infinite pt-10 lg:pt-0' id="astroLogo"></img>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:px-20 ' id="mySkillsDiv">
        <div className='col-span-full my-16 lg:justify-start justify-center flex text-white md:text-6xl text-3xl'>
          <div className='wow animate__animated animate__fadeInLeft'>skills</div>
          <div>-</div>
          <div className='text-purple-500 wow animate__animated animate__fadeInDown'>And</div>
          <div>-</div>
          <div className='wow animate__animated animate__fadeInRight'>Technologies</div>
        </div>

        <SkillsCard Dir='Up' ImgSrc='../Images/C.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Python.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/JS.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Datastructure.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Mongo.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Express.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/React.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Node.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/HTML.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/CSS.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Tailwind.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Bootstrap.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Git.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Api.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Postman.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Netlify.png' />
      </div>

      <div className='grid md:grid-cols-3 lg:px-20' id="myProjects">
        <div className=' col-span-full my-16 lg:justify-end justify-center flex text-white md:text-6xl text-3xl'>
          <div className='wow animate__animated animate__fadeInLeft'>projects</div>
          <div>-</div>
          <div className='text-purple-500 wow animate__animated animate__fadeInDown'>And</div>
          <div>-</div>
          <div className='wow animate__animated animate__fadeInRight'>Experience</div>
        </div>
        <div className='cols-span-1'>
          <img src='../Images/Z.gif' className='h-96'></img>
        </div>
        <div className='col-span-2 bg-white'>
          <h1 className='text-purple-500 wow animate__animated animate__fadeInDown text-8xl'>ZOMATO CLONE</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </div>
    </>

  )
}
