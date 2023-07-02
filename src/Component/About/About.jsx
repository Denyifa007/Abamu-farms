import React from 'react';
import './About.css'


const About = () => {
  return (
    <div name='about' className='w-full h-screen -my-2 text-black-300 md:-mx-1 about '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello. This is Abamu Farms. Please take a look around.</p>
            </div>
            <div>
              <p>Abamu Farms boasts a thriving livestock division. The farm maintains a variety of livestock, 
                including poultry, and pigs, and places great emphasis on animal welfare and ethical farming 
                practices.Abamu Farms is a unique Agricultural platform, that is specialized in poultry farming 
                and other farm products located in Yenegoa Peace Avenue Tombia Imiringi Road</p>
              
                
            </div>
         
          </div>
      </div>
    </div>
  );
};

export default About;