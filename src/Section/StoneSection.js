import React from 'react'
import img1 from '../Assets/Stone/stone-img10.png'
import img2 from '../Assets/Stone/stone-img11.png'
import img3 from '../Assets/Stone/stone-img12.png'
import img4 from '../Assets/Stone/stone-img13.png'
import img5 from '../Assets/Stone/stone-img14.png'
import img6 from '../Assets/Stone/stone-img15.png'

export default function StoneSection() {

    const StoneImages = [
        { title: "EMERLD", img: img1 },
        { title: "YELLOW SPPHIRE", img: img2 },
        { title: "BLUE SPPHIRE", img: img3 },
        { title: "RUBY", img: img4 },
        { title: "PEARL", img: img5 },
        { title: "RED CORAL", img: img6 }
    ]

    return (
        <>
            <section className='grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-x-2 md:gap-x-5 lg:gap-x-7 px-3 md:px-5 lg:px-7'>
                {
                    StoneImages.map((item, index) => (
                        <div className='relative  flex flex-col justify-center  rounded-sm ' key={index}>
                            <div className='absolute w-full flex justify-center'>
                                <img src={item.img} alt={item.title} className='w-40 md:w-44 rounded-full' style={{ boxShadow: '0px 0px 20px #d69c3b6b' }} />
                            </div>
                            <h1 className='mt-20 lg:mt-40 xl:mt-44 h-40 lg:h-44 w-full text-xs md:text-sm lg:text-base flex xl:items-center items-end justify-center tracking-[2px] bgcolor pt-16  pb-1 font-medium rounded-sm'>{item.title}</h1>
                        </div>
                    ))
                }
            </section>
        </>
    )
}
