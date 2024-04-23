import React from 'react'

const Speciality = () => {
  return (
    <div className='w-full bg-[#ECEAE3] py-10 px-10 grid lg:grid-cols-4 grid-cols-1 row-auto items-center gap-10'>
        <div className='px-2 *:mb-2 flex flex-col items-center w-full text-center'>
            <img src="https://i.postimg.cc/NfC1j3kV/dec3cea8873933523ccd43e89f0c3430.png" alt="" />
            <h1 className='text-[#331A15] font-rancho text-3xl'>Awesome Aroma</h1>
            <p className='font-raleway leading-[26px]'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='px-2 *:mb-2 flex flex-col items-center w-full text-center'>
            <img src="https://i.postimg.cc/MKb6SFhQ/d42e96d58e9bc409dea64365c2c79176.png" alt="" />
            <h1 className='text-[#331A15] font-rancho text-3xl'>Pure Grades</h1>
            <p className='font-raleway leading-[26px]'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='px-2 *:mb-2 flex flex-col items-center w-full text-center'>
            <img src="https://i.postimg.cc/GmJs69mk/31aee32eacd738ed27379ad388330f46.png" alt="" />
            <h1 className='text-[#331A15] font-rancho text-3xl'>High Quality</h1>
            <p className='font-raleway leading-[26px]'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='px-2 *:mb-2 flex flex-col items-center w-full text-center'>
            <img src="https://i.postimg.cc/kDrBpRRP/3ec2983776c6c2554ba139bdd52e5f85.png" alt="" />
            <h1 className='text-[#331A15] font-rancho text-3xl'>Proper Roasting</h1>
            <p className='font-raleway leading-[26px]'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
    </div>
  )
}

export default Speciality