import React from 'react'
import Navbar from './Navbar'
import heroImage from '../assets/hero-image.png'
import heroImage2 from '../assets/hero-image2.png'

const Hero = () => {
  return (
    <div className='w-full bgHero'>
        <Navbar />
        <div className='max-w-[1168px] px-4 mx-auto'>
            <div className='grid md:grid-cols-2 py-20 md:py-28 items-center'>
                <div>
                    <h1 className='fontPrimary text-5xl font-bold md:w-10/12 textPrimary'>Sebuah cara mudah mengatur jadwal kuliah kamu</h1>
                    <p className='fontSecondary text-lg text-slate-500 py-4 md:w-10/12'>Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
                    <div className='space-x-4 pt-4 pb-10'>
                        <button className='fontSecondary buttonPrimary'>Learn More</button>
                        <button className='fontSecondary buttonSecondary'>Play Demo</button>
                    </div>
                    <img src={heroImage2} alt="/" />
                </div>
                <img src={heroImage} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Hero