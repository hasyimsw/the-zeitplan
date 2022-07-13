import React from 'react'
import featuredImage from '../assets/featuredImage.png'
import cloud from '../assets/cloud-off.png'
import trash from '../assets/trash-2.png'
import video from '../assets/video.png'
import bell from '../assets/bell.png'

const Featured = () => {
  return (
    <div name="featured" className='max-w-[1168px] px-4 mx-auto py-28'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
                <img className='w-[540deg] h-[679deg]' src={featuredImage} alt="/" />
            </div>
            <div>
                <h1 className='fontPrimary text-4xl'>Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~</h1>
                <p className='fontSecondary text-lg py-5'>Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!</p>

                <div className='grid md:grid-cols-2 gap-8 pt-8'>
                    <div>
                        <img className='w-9 h-9' src={cloud} alt="/" />
                        <h5 className='fontPrimary text-lg py-2'>Tidak Tersimpan Otomatis</h5>
                        <p className='fontSecondary text-base text-slate-500'>Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.</p>
                    </div>
                    <div>
                        <img className='w-9 h-9' src={video} alt="/" />
                        <h5 className='fontPrimary text-lg py-2'>Si Rizal Gak Pernah Ngonten</h5>
                        <p className='fontSecondary text-base text-slate-500'>Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.</p>
                    </div>
                    <div>
                        <img className='w-9 h-9' src={trash} alt="/" />
                        <h5 className='fontPrimary text-lg py-2'>Terhapus Otomatis</h5>
                        <p className='fontSecondary text-base text-slate-500'>Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.</p>
                    </div>
                    <div>
                        <img className='w-9 h-9' src={bell} alt="/" />
                        <h5 className='fontPrimary text-lg py-2'>Nggak Tau Lagi Gw</h5>
                        <p className='fontSecondary text-base text-slate-500'>Mikir teks buat konten susah bro, ini aja ngasal masih susah!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured