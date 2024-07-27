import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import { PiSealCheck } from "react-icons/pi";
import { TbCube3dSphere } from "react-icons/tb";
import { HiOutlineShieldCheck } from "react-icons/hi2";

export default function TagSection() {

    const item = [
        { icon: <IoDiamondOutline />, title: "Original Gemstones", subtitle: '100% natural and certified gemstones.' },
        { icon: <PiSealCheck />, title: "Easy 10-Day return", subtitle: 'You can return your gemstone within 10 days and we do not ask the reason !' },
        { icon: <TbCube3dSphere />, title: "Global Shipping", subtitle: 'Your orders are shipped seamlessly between countries' },
        { icon: <HiOutlineShieldCheck />, title: "100% Secure", subtitle: 'Your payments are secure with our private security network.' },
    ]

    return (
        <>
            <section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 text-white bg-[#d69c3b] gap-2 xl:gap-9 px-5 xl:px-10'>
                {
                    item.map((item, index) => (
                        <div className='flex flex-row gap-3 items-center py-3' key={index}>
                            <span className='text-4xl md:text-5xl'>{item.icon}</span>
                            <div className='flex flex-col'>
                                <h1 className='text-font text-[1.2rem] '>{item.title}</h1>
                                <p className='text-sm font-light'>{item.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}
