import React, { useState } from 'react'
import axios from 'axios';
export default function ContactForm() {

 const [from_name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const [nameText, setNameText] = useState('<your-Full-Name/>');
 const [phoneText, setPhoneText] = useState('<your-Phone-Number/>');
 const [emailText, setEmailText] = useState('<your-Email-Address/>');
 const [messageText, setMsgText] = useState('<operation-Details/>');

 const hideContactForm = () => {
  document.getElementById('contactFormLeft').style.transform = 'translateX(-100%)';
  document.getElementById('contactFormRight').style.transform = 'translateX(100%)';
  document.getElementById('contactFormMainWrap').setAttribute('class', 'fixed top-[5%] lg:left-[35%] h-[90%] lg:w-[30%] left-[5%] w-[90%] z-[3] animate__animated wow animate__zoomOut rounded-3xl grid bg-cover bg-no-repeat bg-center');
  let objDiv = document.getElementById('contactSlides');
  objDiv.scrollTop =0;
  setTimeout(() => {
   document.getElementById('contactFormMainWrap').style.display = 'none';
  }, 500)
  resetFields();
  setName('');
  setPhone('');
  setEmail('');
  setMessage('');
 }

 const sendEmail = () => {
  if (from_name === '') {
   document.getElementById('nameLabel').classList.add('text-red-500');
   setNameText('<empty-Name-Field/>');
  }
  if (phone === '' || Number(phone) < 1000000000) {
   document.getElementById('phoneLabel').classList.add('text-red-500');
   if (phone === '')
    setPhoneText('<empty-Phone-Field/>')
   else if (Number(phone < 1000000000))
    setPhoneText('<invalid-Phone-Field/>')
  }
  if (email === '') {
   document.getElementById('emailLabel').classList.add('text-red-500');
   setEmailText('<empty-email-Field/>')
  }
  if (message === '') {
   document.getElementById('messageLabel').classList.add('text-red-500');
   setMsgText('<empty-Message-Field/>')
  }

  if (from_name !== '' && (Number(phone)>999999999) && email !== '' && message !== '') {
   console.log('Sending message');
   axios.post('https://api.emailjs.com/api/v1.0/email/send', {
    service_id: 'service_fbhfnnp',
    template_id: 'template_5egq49l',
    user_id: '4GN9Gp610MZq5gnUG',
    template_params: {
     from_name: from_name,
     to_name: 'Karan',
     message: message,
     phone: phone,
     email: email
    }
   })
    .then((response) => {
    if(response.data === 'OK'){
     let objDiv = document.getElementById('contactSlides');
     objDiv.scrollTop = objDiv.scrollHeight;
     }
    })
    .catch((error) => {
     console.log(error.message)
    })
  }
  
 }

 const dataIntake = (e) => {
  if (e.target.id === 'from_name')
   setName(e.target.value)
  else if (e.target.id === 'phone') {
   if (phone === '' && e.target.value === '0') {
    setPhone('');
   }
   else {
    if (Number(e.target.value < 10000000000))
     setPhone(e.target.value)
   }
  }
  else if (e.target.id === 'email')
   setEmail(e.target.value)
  else if (e.target.id === 'message')
   setMessage(e.target.value)
 }

 const resetFields = () => {
  setNameText('<your-Full-Name/>');
  setPhoneText('<your-Phone-Number/>');
  setEmailText('<your-Email-Address/>');
  setMsgText('<operation-Details/>');
  document.getElementById('nameLabel').classList.remove('text-red-500');
  document.getElementById('phoneLabel').classList.remove('text-red-500');
  document.getElementById('emailLabel').classList.remove('text-red-500');
  document.getElementById('messageLabel').classList.remove('text-red-500');

 }

 return (
  <>
   <div className='fixed top-0 left-[-50%] h-screen w-[50%] bg-[rgba(0,0,0,0.9)] z-[2]' id="contactFormLeft"> 
   </div>

   
   
   <div id='contactFormMainWrap' className='fixed top-[5%] lg:left-[35%] h-[90%] lg:w-[30%] left-[5%] w-[90%] z-[3] animate__animated wow animate__zoomIn rounded-3xl grid bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url(../Images/ContactBack.jpg)' }}>
    <div className='absolute top-[2%] left-[2%] h-[96%] w-[96%] overflow-hidden' id='contactSlides'>
     <div className='absolute top-0 left-0  h-[100%] w-[100%] flex flex-col items-center justify-around text-xl text-white bg-green-700'>
      <h1 className='text-3xl wow animate__animated animate__flash animate__infinite'>{'<contactForm/>'}</h1>

      <div id='contactName' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInLeft'>
       <label htmlFor='name' className='mb-3' id='nameLabel'>{nameText}</label>
       <input type='text' className='w-[80%] p-2 outline-0 rounded-lg text-black bg-[rgba(255,255,255,0.2)]' placeholder='name.......' id='from_name' onChange={(e)=>{dataIntake(e)}} value={from_name} onClick={()=>{resetFields()}}></input>
      </div>

      <div id='contactPhone' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInRight'>
       <label htmlFor='phone' className='mb-3' id='phoneLabel'>{phoneText}</label>
       <input type='number' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800 bg-[rgba(255,255,255,0.2)]' placeholder='phone.......' id='phone' onChange={(e) => { dataIntake(e) }} value={phone} onClick={() => { resetFields() }}></input>
      </div>

      <div id='contactEmail' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInLeft'>
       <label htmlFor='email' className='mb-3' id='emailLabel'>{emailText}</label>
       <input type='text' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800 bg-[rgba(255,255,255,0.2)]' placeholder='e-mail.......' id='email' onChange={(e) => { dataIntake(e) }} value={email} onClick={() => { resetFields() }}></input>
      </div>

      <div id='contactMessage' className='flex flex-col items-center justify-center w-[100%] wow animate__animated animate__bounceInRight'>
       <label htmlFor='message' className='mb-3' id='messageLabel'>{messageText}</label>
       <textarea type='text' className='w-[80%] p-2 outline-0 rounded-lg text-slate-800 bg-[rgba(255,255,255,0.2)] resize-none' placeholder='message.......' id='message' onChange={(e) => { dataIntake(e) }} value={message} onClick={() => { resetFields() }}></textarea>
      </div>

      <div id='contactSend' className='flex-col items-center justify-center wow animate__animated animate__bounceInLeft bg-white w-[80%] h-10 text-slate-800 rounded-3xl overflow-hidden' onClick={() => {sendEmail()}}>
       <h1 className='z-[4]'>{'<launch-now/>'}</h1>
      </div>


     </div>
     <div className='absolute top-[100%] left-0  w-[100%] flex flex-col items-center justify-evenly  h-[100%]'>
      <div className='h-[50%]'>
       <img src='../Images/ContactRocket.png' alt='Not' className='md:h-[100%] h-[70%]' ></img>
      </div>
      <div className='flex flex-col items-center justify-center'>
       <h1 className='m-1 text-white animate__animated animate__flash animate__infinite text-3xl' id='esuccess1'>{'<email/>'}</h1>
       <h1 className='m-1 text-white animate__animated animate__flash animate__infinite text-3xl' id='esuccess2'>{'<sent/>'}</h1>
       <h1 className='m-1 text-white animate__animated animate__flash animate__infinite text-3xl' id='esuccess3'>{'<successfully/>'}</h1>
      </div>
     </div>
    </div>
   </div>






   <div className=' fixed top-0 left-[100%] h-screen w-[50%] bg-[rgba(0,0,0,0.9)] z-[2]' id="contactFormRight">
    <img src='../Images/X.png' className='absolute lg:h-[40px] lg:w-[40px] p-2 bg-white lg:right-5 lg:top-5 top-2 right-2  rounded-lg h-[30px] w-[30px]' id='X' onClick={()=>{hideContactForm()}}></img>
   </div>
   </>
    
  )
}
