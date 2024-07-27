import React from 'react'
import img1 from '../Assets/Stone/stone-img2.png'
import img2 from '../Assets/Stone/stone-img4.png'
import img3 from '../Assets/Stone/stone-img7.png'
import img4 from '../Assets/Stone/stone-img10.png'
import img5 from '../Assets/Stone/stone-img14.png'
import img6 from '../Assets/Stone/stone-img15.png'
import SectionTitle from '../Components/SectionTitle'

export default function StoneSection2() {

    const StoneImages = [
        { title: "AMETH", img: img1 },
        { title: "CRTRINE", img: img2 },
        { title: "IOLITE", img: img3 },
        { title: "RED GERNET",  img: img4 },
        { title: "PEARL", img: img5 },
        { title: "PERIOT", img: img6 }
    ]
  return (
    <div className=' px-3 md:px-5 lg:px-7 flex flex-col'>
        <SectionTitle title='Substitute Gemstones' />
        
        <section className='grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-x-2 md:gap-x-5 lg:gap-x-7'>
                {
                    StoneImages.map((item, index) => (
                        <div className='relative  flex flex-col justify-center  rounded-sm ' key={index}>
                            <div className='absolute w-full flex justify-center'>
                                <img src={item.img} alt={item.title} className='w-40 md:w-44 rounded-full' style={{ boxShadow: '0px 0px 20px #d69c3b6b' }} />
                            </div>
                            <h1 className='mt-20  h-40 lg:h-44 w-full text-xs md:text-sm lg:text-base flex  items-end justify-center tracking-[2px] bgcolor pt-16  pb-2 font-medium rounded-sm'>{item.title}</h1>
                        </div>
                    ))
                }
            </section>
    </div>
  )
}
