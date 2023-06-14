import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import './Home.css'
import cucumbar from '../../Assets/cucumbar1.jpg'
import chicken from '../../Assets/farm-investment-own-a-farm-poultry-farm.jpg'
import chicks from '../../Assets/Ross-308-day-old-chicks-1024x584.jpeg'
import {motion} from 'framer-motion'


const Home = () => {
    const transition ={ duation: 2, type: 'spring'}
  return (
    <div name='home' className='py-20 px-5  flex h-screen home'>
        {/* leftside  */}
        <div className='w-[800px] mx-10 px-4 flex flex-col justify-center h-full first-content homebody'>
            <p className='text-[#53ec86] text-8xl font-bold welcome'>Welcome<span className='text-2xl text-[black]'>To</span></p>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#304a99]'>Abamu Farms</h2> 
            <p className='text-[#121314] py-4 max-w-[700px] abamu'>Abamu Farms is a leading agricultural enterprise dedicated to sustainable and innovative farming practices. With a rich history spanning several decades, Abamu Farms has established itself as a trusted provider of high-quality produce, focusing on both crop cultivation and livestock production. Our commitment to excellence, environmental stewardship, and community engagement sets us apart in the industry. By leveraging cutting-edge technology, expert knowledge, and a passion for agriculture, Abamu Farms strives to meet the growing demand for nutritious food while promoting a greener and more prosperous future.</p>
            <div>
                <button className='text-black group border-2  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-300 to-green-600 hover:bg-green-600 hover:border-green-600 '>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>

        </div>
        <div className='w-[600px] mx-10 px-4 flex flex-col justify-center h-full home2'>
            {/* rightside */}
            <div className='w-[600px] mx-1 px-4 flex flex-col justify-center imgdiv'>
            {/* right div  */}
            <motion.img
            initial={{right: '4%'}}
            whileInView={{left:'55%'}}
            transition={transition}

            
            src={cucumbar} alt="" className='cucumbar' />
            <motion.img
            initial={{left: '-20%' }}
            whileInView={{left:'1%' }}
            transition={transition}
                
            src={chicken} alt="" className='chiccken1' />
            <motion.img
            initial={{right: '5%'}}
            whileInView={{left:'40%'}}
            transition={transition}
                
            src={chicks} alt=""  className='chicks1'/>
            {/* blur  */}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur2'></div>
        </div>
        </div>

    </div>
  )
}

export default Home