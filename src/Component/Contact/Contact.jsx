import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import ScrollToTop from "react-scroll-to-top";
import {BsWhatsapp} from 'react-icons/bs'
import './Contact.css'

const Contact = () => {
  return (
    
    <div name='contact' className=' w-full h-screen flex justify-center items-center p-4'>
         <ScrollToTop smooth top= '20'
         width='50p'
         color='green' 
          />
    <div class="whatsapp-container">
        <a href= "https://wa.me/2348062219288" target="_blank"><BsWhatsapp className='whatsappi' /></a>
    </div>
        <form action="https://getform.io/f/d9ebf626-2052-4681-95c5-d39d0831a768" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-black-300'>Contact</p>
                <p className='text-black-300 py-4'>//Submit the form below to send us an Email - <span className='text-red-700' style={{cursor:'pointer'}}>abamuenterprise@gmail.com</span> </p>

            </div>
            <input className='bg-[#82f278] p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-[#82f278] p-2 my-4' type="number" placeholder='Phone no' name='phone no' />
            <input className='my-4 p-2 bg-[#82f278]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#82f278]  p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black group border-2 rounded-md  bg-gradient-to-r from-green-300 to-green-600 hover:bg-green-600 hover:border-green-600  px-4 py-3 my-8 mx-auto flex items-center'> <span><HiArrowNarrowRight className='mr-3'/></span>  Submit</button>
            
        </form>
    </div>
  )
};

export default Contact
