import React from 'react'
import Typed from 'typed.js'
import './Portfolio.css'
import 'animate.css'
import WOW from 'wowjs'
import SkillsCard from './Components/SkillsCard'
import ZomatoClone from './Components/ZomatoClone'
import C2WLib from './Components/C2WLib'
import UpworkClone from './Components/UpworkClone'
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
  }, []);

  const phoneViewEnable = () => {
    document.getElementById('phoneOptions').style.transform = 'translateX(-100%)';
    // document.getElementById('phoneMenuHome').style.display = 'block';
    // document.getElementById('phoneMenuHome').setAttribute('class', 'animate__animated wow animate__bounceInLeft');

    document.getElementById('phoneMenuAbout').style.display = 'block';
    document.getElementById('phoneMenuAbout').setAttribute('class', 'animate__animated wow animate__bounceInRight');

    document.getElementById('phoneMenuSkills').style.display = 'block';
    document.getElementById('phoneMenuSkills').setAttribute('class', 'animate__animated wow animate__bounceInLeft');

    document.getElementById('phoneMenuProjects').style.display = 'block';
    document.getElementById('phoneMenuProjects').setAttribute('class', 'animate__animated wow animate__bounceInRight');

    document.getElementById('phoneMenuContact').style.display = 'block';
    document.getElementById('phoneMenuContact').setAttribute('class', 'animate__animated wow animate__bounceInLeft');
  }

  const phoneViewDisable = (e) => {
    document.getElementById('phoneOptions').style.transform = 'translateX(100%)';
    // document.getElementById('phoneMenuHome').style.display = 'none';
    document.getElementById('phoneMenuAbout').style.display = 'none';
    document.getElementById('phoneMenuSkills').style.display = 'none';
    document.getElementById('phoneMenuProjects').style.display = 'none';
    document.getElementById('phoneMenuContact').style.display = 'none';
  }

  // const scrolled = () => {
  //   console.log('scroll');
  // }

  // document.addEventListener('scroll', scrolled);
  window.addEventListener('scroll', () => {
    // console.log(document.documentElement.scrollTop)
    let rewWidth = Math.ceil((document.documentElement.scrollTop / 4552) * 100);
    console.log("REQ : ",rewWidth);
    if (document.documentElement.scrollTop === 0) {
      document.getElementById("myNavbar").style.backgroundColor = 'rgba(0,0,0,0)';
      // document.getElementById("borderBottom").style.transform = "scale(1,1)";
      // document.getElementById("myNavbar").classList.add('bg-opacity-40');
    }
    else {
      // document.getElementById("myNavbar").classList.remove('bg-opacity-40');
      document.getElementById("myNavbar").style.backgroundColor = 'rgba(0,0,0,0.8)';
      // document.getElementById("borderBottom").style.transform = `scale(${window.innerWidth},5)`;
    }
    document.getElementById("borderBottom").style.width =`${rewWidth}%`;
  });

  return (
    <>
      <div className='fixed top-0 left-0 h-screen w-screen z-[-1] bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url(../Images/LandBack.jpg)'}}>
      </div>
      {/* <img src='../Images/LandBack.jpg' alt='Not' className=''></img> */}
      <div id="phoneOptions" className='fixed h-screen w-screen bg-[rgba(0,0,0,0.8)] z-[20]' onClick={(e) => { phoneViewDisable(e) }}>
        <img src='../Images/X.png' className='absolute h-[40px] w-[40px] p-2 bg-white right-5 top-5  rounded-lg' id='X'></img>
        <div className='absolute grid bg-purple-850 content-center h-[60%] w-[100%] top-[20%] gap-24 rounded-3xl text-4xl '>
          {/* <div className='text-white text-4xl flex justify-center items-center phoneMenu'>
            <h1 id='phoneMenuHome'>HOME</h1>
          </div> */}
          <div className='text-white flex justify-center items-center phoneMenu'>
            <a href='#'>
              <h1 className=' animate__animated wow animate__bounceInDown' id='phoneMenuAbout'>{'<abountMe/>'}</h1>
            </a>
          </div>
          <div className='text-white  flex justify-center items-center phoneMenu'>
            <a href='#mySkillsDiv'>
              <h1 className=' animate__animated wow animate__bounceInDown' id='phoneMenuSkills'>{'<skillsAndTech/>'}</h1>
            </a>
          </div>
          <div className='text-white flex justify-center items-center phoneMenu'>
            <a href='#myProjects'><h1 className=' animate__animated wow animate__bounceInDown' id='phoneMenuProjects'>{'<projects/>'}</h1></a>
            
          </div>
          <div className='text-white flex justify-center items-center phoneMenu'>
            <h1 className=' animate__animated wow animate__bounceInDown' id='phoneMenuContact'>{'<contactMe/>'}</h1>
          </div>
        </div>
      </div>
      <nav className='fixed w-screen top-0 grid grid-cols-8 z-10' id='myNavbar'>
        <div className='flex md:justify-start items-center lg:col-span-2 col-span-4'>
          <img className='animate__animated animate__backInLeft lg:h-28 h-20' src='../Images/KLogo.gif' alt='Not'></img>
        </div>
        <div className='hidden lg:block col-span-6'>
          <div className='text-white flex justify-around items-center h-full'>
            {/* <button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl'>Home</button> */}
            <a href='#'><button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-0s'>{'<abountMe/>'}</button></a>
            <a href='#mySkillsDiv'><button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-1s'>{'<skillsAndTech/>'}</button></a>
            <a href='#myProjects'><button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-2s'>{'<projects/>'}</button></a>
            <button className='hover:border-b-2 h-8 animate__animated animate__backInDown text-2xl animate__delay-3s'>{'<contactMe/>'}</button>
          </div>
        </div>
        <div className='block lg:hidden flex items-center justify-end pe-7 col-span-4'>
          <img src='../Images/Options.png' alt='Not' className='h-10' onClick={()=>{phoneViewEnable()}}></img>
        </div>
        <div id='borderBottom'></div>
      </nav>

      <div className='grid lg:grid-cols-2 lg:mb-0  lg:h-screen w-screen'>
        <div className='text-white lg:pt-32 lg:pl-20 pt-44 px-5'>
          <h1 className='text-4xl font-semibold mb-3 animate__animated animate__backInDown'>Hi!i!i, i am</h1>
          <h1 ref={el} className='inline text-6xl md:text-8xl font-extrabold text-purple-500 '></h1>
          <h1 className='my-4 text-2xl animate__animated animate__backInUp'>Welcome to my profile</h1>
          <h1 className='text-justify animate__animated animate__backInRight '>
            Hello, I'm Karan S Khedkar, a passionate tech enthusiast who embarked on the exciting journey of coding and programming just last year.
            <br></br>
            In a relatively short span of time, I've delved into the world of programming languages, gaining proficiency in languages such as C, C++, Python, JavaScript, HTML, CSS...
            <br></br>
            My curiosity led me to explore powerful frameworks like ReactJS and Node.js, which have become integral parts of my toolkit. Currently, I'm fully engaged in the realm of MERN stack development, where I bring ideas to life through dynamic web applications.
            <br></br>
            I invite you to explore my portfolio, where you'll find examples of my work showcasing my coding journey so far. Whether you have a project in mind, want to discuss technology trends, or simply share your enthusiasm for tech, feel free to get in touch. Together, we can build remarkable digital experiences.
          </h1>
        </div>
        <div className='flex items-center justify-center wow animate__animated animate__backInUp  mt-20'>
          <img src='../Images/Astro.png' alt='Not' className='h-96 wow animate__animated animate__shakeY animate__infinite lg:mt-0' id="astroLogo"></img>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-56' id="mySkillsDiv">
        <div className='hidden md:block col-span-full'>
          <div className='col-span-full lg:justify-start justify-center flex text-white md:text-6xl text-xl lg:pl-20 lg:pt-20 my-20'>
            <div className='wow animate__animated delayAnimate animate__zoomInLeft'>skills</div>
            <div>-</div>
            <div className='text-purple-500 wow animate__animated animate__zoomInUp delayAnimate'>And</div>
            <div>-</div>
            <div className='wow animate__animated animate__zoomInRight delayAnimate'>Technologies</div>
          </div>
        </div>
        <div className='block md:hidden col-span-full'>
          <div className='col-span-full my-32 justify-center flex text-white md:text-6xl text-2xl '>
            <div className='wow animate__animated delayAnimate animate__fadeInUp'>skills</div>
            <div>-</div>
            <div className='text-purple-500 wow animate__animated animate__fadeInUp delayAnimate'>And</div>
            <div>-</div>
            <div className='wow animate__animated animate__fadeInUp delayAnimate'>Technologies</div>
          </div>
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
        <SkillsCard Dir='Up' ImgSrc='../Images/API.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Postman.png' />
        <SkillsCard Dir='Up' ImgSrc='../Images/Netlify.png' />
      </div>

      <div className='grid grid-cols-3 lg:mt-56 lg:px-20 px-5' id="myProjects">
        <div className='hidden md:block col-span-full'>
          <div className='col-span-full  justify-end items-center flex text-white md:text-6xl text-2xl lg:pt-20 my-20'>
            <div className='wow animate__animated animate__zoomInLeft delayAnimate'>projects</div>
            <div>-</div>
            <div className='text-purple-500 wow animate__animated animate__zoomInUp delayAnimate'>And</div>
            <div>-</div>
            <div className='wow animate__animated animate__zoomInRight delayAnimate'>Experience</div>
          </div>
        </div>
        <div className='block md:hidden col-span-full'>
          <div className='col-span-full  flex justify-center items-center text-white md:text-6xl text-2xl mt-32'>
            <div className='wow animate__animated animate__fadeInUp delayAnimate'>projects</div>
            <div>-</div>
            <div className='text-purple-500 wow animate__animated animate__fadeInUp delayAnimate'>And</div>
            <div>-</div>
            <div className='wow animate__animated animate__fadeInUp delayAnimate'>Experience</div>
          </div>
        </div>
        
        <ZomatoClone/>
        <C2WLib />
        <UpworkClone />
      </div>
    </>

  )
}
