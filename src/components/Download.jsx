import React from 'react'
import appStore from '../assets/app-store.png'
import googlePlay from '../assets/google-play.png'
import Footer from './Footer'

const Download = () => {
  return (
    <div name="download" className='max-w-[1168px] mx-auto px-4 pt-28 pb-10'>
        <h1 className='fontPrimary text-4xl text-center'>Download Aplikasi Keren Ini Sekarang!</h1>
        <p className='fontSecondary text-lg text-slate-500 md:w-8/12 mx-auto text-center py-4'>Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.</p>
        <div className='flex justify-center space-x-4 py-4'>
            <button><img src={appStore} alt="/" /></button>
            <button><img src={googlePlay} alt="/" /></button>
        </div>
        <Footer />
    </div>
  )
}

export default Download