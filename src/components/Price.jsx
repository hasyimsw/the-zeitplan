import React from 'react'

const Price = () => {
  return (
    <div className='w-full bgHero'>
        <div className='max-w-[1168px] px-4 mx-auto py-28'>
            <h1 className='fontPrimary text-4xl text-center textPrimary md:w-6/12 mx-auto'>Main catur sambil bersepeda, beda harga beda fitur</h1>
            <p className='text-lg text-center text-slate-500 py-4 md:w-8/12 mx-auto'>Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
                <div className='p-10 bg-white rounded-md shadow-md'>
                  <h3 className='text-sm textSecondary font-semibold'>RINDURATU</h3>
                  <h1 className='fontPrimary textPrimary text-4xl py-4'>Free</h1>
                  <p className='text-lg fontSecondary text-slate-500'>Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.</p>
                  <div className='py-4'>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Jadwal Tak Terbatas</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Fitur Notifikasi (Kadang Telat)</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Mode Gelap</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Bisa Topup Pulsa</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Bisa Beli Token Listrik</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Dapet Skin Gratis</p>
                    <p className='text-lg text-slate-700 fontSecondary pt-1 pb-8'>✅ Data Lo Dijual</p>
                    <button className='buttonPrimary w-full'>Download</button>
                  </div>
                </div>
                <div className='p-10 bg-white rounded-md shadow-md'>
                  <h3 className='text-sm textSecondary font-semibold'>SULTAN</h3>
                  <h1 className='fontPrimary textPrimary text-4xl py-4'>Rp 100K</h1>
                  <p className='text-lg fontSecondary text-slate-500'>Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.</p>
                  <div className='py-4'>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Semua Fitur Sebelumnya</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Diingetin Makan</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Sleepcall Sampe Bobo</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Ditemenin Jalan Tiap Minggu</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Ditemenin Nonton Eksekswan</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Dapet Izin Bikin Ormas</p>
                    <p className='text-lg text-slate-700 fontSecondary pt-1 pb-8'>✅ Terhindar Razia Rambut</p>
                    <button className='buttonPrimary w-full'>Download</button>
                  </div>
                </div>
                <div className='p-10 bg-white rounded-md shadow-md'>
                  <h3 className='text-sm textSecondary font-semibold'>RAFATAR</h3>
                  <h1 className='fontPrimary textPrimary text-4xl py-4'>Rp 10000K</h1>
                  <p className='text-lg fontSecondary text-slate-500'>Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.</p>
                  <div className='py-4'>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Semua Fitur Sebelumnya</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Dibayarin Kuliah 4 Semester</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Dibayarin Cicilan Motor</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Dicicilin KPR 12 Tahun</p>
                    <p className='text-lg text-slate-700 fontSecondary py-1'>✅ Magang di NASA Cab. Depok</p>
                    <p className='text-lg text-slate-700 fontSecondary pt-1'>✅ Nonton Film Gratis di Ganool</p>
                    <p className='text-lg text-slate-700 fontSecondary pt-1 pb-8'>✅ Naik Haji Bila Mampu</p>
                    <button className='buttonPrimary w-full'>Download</button>
                  </div>
                </div>
            </div>
            <p className='text-center pt-10 md:w-6/12 mx-auto text-base text-slate-500 fontSecondary'><span className='font-bold'>Harap Diingat:</span> Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti pengumuman PPKM darurat.</p>
        </div>
    </div>
  )
}

export default Price