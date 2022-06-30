import React from 'react'
import logo from '../assets/logo.png'
import right from '../assets/to-right.png'

const Navbar = () => {
  return (
    <div className='pt-10 px-4'>
        <div className='max-w-[1168px] mx-auto shadow-xl bg-white rounded-md'>
            <div className='flex items-center justify-between h-20 px-8'>
                <div className='flex items-center cursor-pointer'>
                    <img className='w-[38px] h-[38px]' src={logo} alt="/" />
                    <h5 className='fontTertiary font-semibold text-lg ml-3'>ZEITPLAN</h5>
                </div>
                <div className='md:flex items-center hidden'>
                    <ul className='flex items-center space-x-8 mr-8 fontSecondary font-semibold'>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'>Home</li>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'>Fitur-fitur</li>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'>Harga</li>
                        <li className='text-black/60 cursor-pointer hover:text-[#FE5E44]'>Testimoni</li>
                    </ul>
                    <button className='buttonPrimary flex items-center fontSecondary'>Download <img className='w-5 h-5 ml-2 mt-1' src={right} alt="/" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar