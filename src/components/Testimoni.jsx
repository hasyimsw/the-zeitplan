import React from 'react'
import stars1 from '../assets/stars-yellow.png'
import stars2 from '../assets/stars-gray.png'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img-6.png'

const Testimoni = () => {
  return (
    <div className='w-full bg-[#FE5E44]/20'>
      <div className='max-w-[1168px] px-4 mx-auto py-28'>
        <h1 className='text-center fontPrimary text-4xl md:w-10/12 lg:w-6/12 mx-auto'>Apa kata umat manusia tentang aplikasi keren ini?</h1>
        <p className='text-center fontSecondary text-lg text-slate-500 py-4 md:w-10/12 lg:w-6/12 mx-auto'>Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8'>
          <div className='bg-white rounded-md shadow-sm p-6'>
            <div className='flex space-x-2'>
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
            </div>
            <p className='text-sm text-slate-600 fontTertiary py-4'>
              “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”
            </p>
            <div className='flex items-center'>
              <img className='w-[55px] h-[55px]' src={img1} alt="/" />
              <div className='ml-4'>
                <h5 className='fontTertiary text-base'>Sanusi Sulivan</h5>
                <p className='fontTertiary text-xs text-slate-500'>Dosen di Boating School Ny. Puff</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-sm p-6'>
            <div className='flex space-x-2'>
              <img src={stars1} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
            </div>
            <p className='text-sm text-slate-600 fontTertiary py-4'>
              “Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.. Mending aku ikut ormas PP.”
            </p>
            <div className='flex items-center'>
              <img className='w-[55px] h-[55px]' src={img2} alt="/" />
              <div className='ml-4'>
                <h5 className='fontTertiary text-base'>Wahyu Hayuk</h5>
                <p className='fontTertiary text-xs text-slate-500'>Mahasiswa Abadi</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-sm p-6'>
            <div className='flex space-x-2'>
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
            </div>
            <p className='text-sm text-slate-600 fontTertiary py-4'>
            “Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”
            </p>
            <div className='flex items-center'>
              <img className='w-[55px] h-[55px]' src={img3} alt="/" />
              <div className='ml-4'>
                <h5 className='fontTertiary text-base'>Ibu Scarlet Darkening</h5>
                <p className='fontTertiary text-xs text-slate-500'>Ibunya Wahyu Hayuk</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-sm p-6'>
            <div className='flex space-x-2'>
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
            </div>
            <p className='text-sm text-slate-600 fontTertiary py-4'>
            “Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU inStAL d hp qu, aq mw pKe apkx bwat nnToN drkoR.”
            </p>
            <div className='flex items-center'>
              <img className='w-[55px] h-[55px]' src={img4} alt="/" />
              <div className='ml-4'>
                <h5 className='fontTertiary text-base'>Indah Cyank Dya Clmax</h5>
                <p className='fontTertiary text-xs text-slate-500'>Works at Looking For True Love, Inc</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-sm p-6'>
            <div className='flex space-x-2'>
              <img src={stars1} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
              <img src={stars2} alt="/" />
            </div>
            <p className='text-sm text-slate-600 fontTertiary py-4'>
            “Pengiriman cepat,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba.. saya kasih bintang satu dulu,, xixixi.. 😀😀😀”
            </p>
            <div className='flex items-center'>
              <img className='w-[55px] h-[55px]' src={img5} alt="/" />
              <div className='ml-4'>
                <h5 className='fontTertiary text-base'>Jumadi RT. 03</h5>
                <p className='fontTertiary text-xs text-slate-500'>Ketua RT. 06</p>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-sm p-6'>
            <div className='flex space-x-2'>
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
              <img src={stars1} alt="/" />
            </div>
            <p className='text-sm text-slate-600 fontTertiary py-4'>
            “aplikasinya keren! mjb, nder.. aku numpang lapak yaaa.. Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv .”
            </p>
            <div className='flex items-center'>
              <img className='w-[55px] h-[55px]' src={img6} alt="/" />
              <div className='ml-4'>
                <h5 className='fontTertiary text-base'>Cucunya Megalodon</h5>
                <p className='fontTertiary text-xs text-slate-500'>Pecinta Kucing Hungaria</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimoni