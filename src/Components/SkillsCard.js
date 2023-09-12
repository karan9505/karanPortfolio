import React from 'react'

export default function SkillsCard(props) {
  return (
   <div className={` wow animate__animated animate__zoomIn flex justify-center items-center rounded-2xl mb-20`}>
      <img src={props.ImgSrc} className='md:h-36 h-20 animate__animated animate__pulse animate__infinite' alt='Not'></img>
   </div>
  )
}
