import React from 'react'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

const Footer = () => {
  return (
    <div className='max-w-[1168px] px-4 mx-auto pt-20'>
        <div className='block lg:flex'>
            <div className='lg:w-5/12'>
                <img className='w-9 h-9' src={logo} alt="/" />
                <h1 className='fontPrimary text-lg py-4'>Zeitplan</h1>
                <p className='fontSecondary text-base text-slate-500 w-full md:w-10/12 lg:w-full'>Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.</p>
                <p className='fontSecondary text-sm pt-4 text-slate-700'>COPYRIGHT (C) 2022. DESIGN BY NAUVAL CODE BY HASYIM</p>
            </div>
            <div className='lg:w-4/12 flex justify-between pt-6 lg:pt-0'>
                <div className='w-6/12 lg:ml-2'>
                    <h1 className='fontPrimary text-lg'>Sitemap</h1>
                    <ul className='fontSecondary text-base text-slate-500 pt-4 space-y-3'>
                        <li>Beranda</li>
                        <li>Fitur-fitur</li>
                        <li>Harga</li>
                        <li>Testimoni</li>
                        <li>Download</li>
                    </ul>
                </div>
                <div className='w-6/12'>
                    <h1 className='fontPrimary text-lg'>Partner</h1>
                    <ul className='fontSecondary text-base text-slate-500 pt-4 space-y-3'>
                        <li>Sefan.ru</li>
                        <li>Ganool</li>
                        <li>Waptrick</li>
                        <li>Stafaband</li>
                        <li>MyWapBlog</li>
                        <li>Friv</li>
                    </ul>
                </div>
            </div>
            <div className='lg:w-3/12'>
                <h1 className='fontPrimary text-lg'>Tetep Terhubung</h1>
                <p className='fontSecondary text-base text-slate-500 py-4'>Lihat kami pansos di sosial media berikut:</p>
                <div className='flex space-x-2'>
                    <img className='p-4 bg-red-50 rounded-full' src={instagram} alt="/" />
                    <img className='p-4 bg-red-50 rounded-full' src={facebook} alt="/" />
                    <img className='p-4 bg-red-50 rounded-full' src={twitter} alt="/" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer