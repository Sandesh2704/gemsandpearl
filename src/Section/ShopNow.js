import React from 'react'
import banner from '../Assets/BackgroundImg/videobg-img.png'
import Button from '../Components/Button'

export default function ShopNow() {
  return (
    <>
      <div className='bg-cover bg-center py-20 xl:py-28 bg-rose-50 px-4 md:px-10 xl:px-48 flex flex-col items-center justify-center gap-y-6' style={{ backgroundImage: `url(${banner})` }}>
        <div className='text-font text-3xl md:text-4xl lg:text-5xl text-center'>Craft a Masterpiece Ring<span className='color'> With Gems & Pearl </span></div>
        <p className='color text-center px-5 md:px-10 rounded-full py-2 bg-white text-base  md:text-xl lg:text-2xl text-bold' style={{ boxShadow: "6px 7px 0px #f4d0d6" }}>Your Desires + Our Mastery = Your Dream Ring</p>
        <div className=''>
          <Button title='SHOP NOW' />
        </div>
      </div>
    </>
  )
}
