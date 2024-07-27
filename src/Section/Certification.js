import React from 'react'
import img1 from '../Assets/certifications/lablogonew1.png'
import img2 from '../Assets/certifications/lablogonew2.png'
import img3 from '../Assets/certifications/lablogonew3.png'
import img4 from '../Assets/certifications/lablogonew4.png'
import img5 from '../Assets/certifications/lablogonew5.png'
import img6 from '../Assets/certifications/lablogonew6.png'
import SectionTitle from '../Components/SectionTitle'
import banner1 from '../Assets/BackgroundImg/top-main-desing.png'
import banner2 from '../Assets/BackgroundImg/top-main-desing2.png'

export default function Certification() {

    const Certifictions = [
        { title: "AMETH", img: img1 },
        { title: "CRTRINE", img: img2 },
        { title: "IOLITE", img: img3 },
        { title: "RED GERNET", img: img4 },
        { title: "PEARL", img: img5 },
        { title: "PERIOT", img: img6 }
    ]

    return (
        <>
            <div className='relative px-4 md:px-7 lg:px-20 xl:px-56 flex flex-col '>
                <SectionTitle title='Lab Certifications' />

                <section className='  grid  mt-8 grid-cols-3 gap-3 lg:gap-7'>
                    {

                        Certifictions.map((item, index) => (
                            <div className='p-3 z-10 bg-white flex items-center justify-center border border-gray-300 h-full' key={index} >
                                <img src={item.img} alt={item.title} className='' />
                            </div>

                        ))
                    }

                </section>
                <img src={banner1} alt="banner1" className='hidden lg:flex absolute left-0 ' />
                <img src={banner2} alt="banner2" className='hidden lg:flex absolute right-0' />
            </div>
        </>
    )
}
