import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaInstagram, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'
import abamufarmlogo from '../../Assets/WhatsApp Image 2023-06-09 at 18.01.45 (1).jpeg'
import './Navbar.css'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 text-black-300 nav'>
        <div>
            <img src={abamufarmlogo} alt=""  className='abamulogo'/>
            
        </div>
            <ul className='hidden md:flex text-xl navbar'>
                <li>
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li>
                <Link to="products" smooth={true} duration={500}>
                    Products
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}  
        </div>
        {/* Mobile menu */}
    <ul className= {!nav ? 'hidden':  'cursor-pointer  absolute top-0 left-o  w-full h-screen bg-white flex flex-col justify-center items-center'}>
            <li className='px-4 py-6 cursor-pointer capitalize text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="products" smooth={true} duration={500}>
                    Products
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
            </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="/">
                Facebook <FaFacebook size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="/">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#30d44b] '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="/">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f7726a] '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://www.instagram.com/abamufarms/" target='blank'>
                Instagram <FaInstagram size={30}/>
              </a>
            </li>
          </ul>

        </div>

    </div>
  )
}

export default Navbar