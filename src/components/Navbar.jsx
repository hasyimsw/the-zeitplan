import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import right from '../assets/to-right.png'

const Navbar = () => {
  return (
    <div name="home" className='pt-10 px-4'>
        <div className='max-w-[1168px] mx-auto shadow-xl shadow-red-100 bg-white rounded-md'>
            <div className='flex items-center justify-between h-20 px-8'>
                <div className='flex items-center cursor-pointer'>
                    <img className='w-[38px] h-[38px]' src={logo} alt="/" />
                    <h5 className='fontTertiary font-semibold text-lg ml-3'>ZEITPLAN</h5>
                </div>
                <div className='md:flex items-center hidden'>
                    <ul className='flex items-center space-x-8 mr-8 fontSecondary font-semibold'>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'><Link to='home' smooth={true} duration={500}>Home</Link></li>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'><Link to='featured' smooth={true} duration={500}>Fitur-fitur</Link></li>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'><Link to='price' smooth={true} duration={500}>Harga</Link></li>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'><Link to='testimoni' smooth={true} duration={500}>Testioni</Link></li>
                    </ul>
                    <button className='buttonPrimary flex items-center fontSecondary'><Link className='flex items-center' to='download' smooth={true} duration={500}>Download <img className='w-5 h-5 ml-1' src={right} alt="/" /></Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar