import React from 'react'
import database from '../assets/database.png'
import code from '../assets/code.png'
import user from '../assets/user.png'
import wifiOff from '../assets/wifi-off.png'

const Applications = () => {
  return (
    <div className='max-w-[1168px] px-4 mx-auto py-20'>
        <div className='block lg:flex items-center'>
            <div className='lg:w-5/12'>
                <h1 className='fontPrimary text-[38px] md:w-10/12'>Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h1>
                <p className='fontSecondary text-lg text-slate-500 py-4 md:w-10/12'>Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.</p>
                <div className='pt-10 flex space-x-10'>
                    <div>
                        <p className='text-xs text-slate-500'>TOTAL DON'TLOUD</p>
                        <h3 className='text-2xl font-semibold'>1,501,234</h3>
                    </div>
                    <div>
                        <p className='text-xs text-slate-500'>TOTAL USERS</p>
                        <h3 className='text-2xl font-semibold'>1,318,829</h3>
                    </div>
                </div>
            </div>
            <div className='lg:w-7/12 grid md:grid-cols-2 gap-5 md:gap-8 pt-10'>
                <div className='bgSecondary p-8 shadow-md'>
                    <div className='flex items-center'>
                        <div className='bgPrimary p-3 rounded-lg'>
                            <img className='w-6 h-6' src={database} alt="/" />
                        </div>
                        <p className='fontSecondary text-lg font-semibold ml-2'>Aplikasi Gratis</p>
                    </div>
                    <p className='fontSecondary text-base text-slate-600 pt-4 w-10/12 md:w-full'>Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.</p>
                </div>
                <div className='bgSecondary p-8 shadow-md'>
                    <div className='flex items-center'>
                        <div className='bgPrimary p-3 rounded-lg'>
                            <img className='w-6 h-6' src={wifiOff} alt="/" />
                        </div>
                        <p className='fontSecondary text-lg font-semibold ml-2'>Kode OTP Error</p>
                    </div>
                    <p className='fontSecondary text-base text-slate-600 pt-4 w-10/12 md:w-full'>Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.</p>
                </div>
                <div className='bgSecondary p-8 shadow-md'>
                    <div className='flex items-center'>
                        <div className='bgPrimary p-3 rounded-lg'>
                            <img className='w-6 h-6' src={user} alt="/" />
                        </div>
                        <p className='fontSecondary text-lg font-semibold ml-2'>Data Tidak Aman</p>
                    </div>
                    <p className='fontSecondary text-base text-slate-600 pt-4 w-10/12 md:w-full'>Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.</p>
                </div>
                <div className='bgSecondary p-8 shadow-md'>
                    <div className='flex items-center'>
                        <div className='bgPrimary p-3 rounded-lg'>
                            <img className='w-6 h-6' src={code} alt="/" />
                        </div>
                        <p className='fontSecondary text-lg font-semibold ml-2'>Biasanya Error</p>
                    </div>
                    <p className='fontSecondary text-base text-slate-600 pt-4 w-10/12 md:w-full'>Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Applications