import React from 'react'
import banner from '../Assets/BackgroundImg/banner-sec3.jpg'
import img from '../Assets/Stone/sec2-img.png'
import Button from '../Components/Button'
import SectionTitle from '../Components/SectionTitle'

export default function WhoWeAre() {
    return (
        <>
            <div className='py-10 px-4 md:px-10 xl:px-48'  style={{ backgroundImage: `url(${banner})` }}>
                <div className='flex justify-center items-center flex-col mb-6'>
                    <h1 className='color font-bold tracking-[.25em] mb-3 '>WHO WE ARE</h1>
                    <SectionTitle title='A Glittering Journey into Gems, jewellery, and Pearls' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex items-center'>
                        <div className='flex flex-col gap-y-5 text-sm lg:text-base leading-relaxed text-justify'>
                            <p>
                                Gems & Pearl is an e-commerce platform dealing primarily in natural gemstones. Our journey, which was once embarked upon through offline channels, has now expanded to the virtual realm, bringing you the timeless allure of Natural gemstones from the comfort of your screen.
                            </p>
                            <p>
                                Our website stands as a testament to our commitment to revolutionizing the eCommerce landscape for natural gemstones, making them available to you at unprecedented value.
                            </p>
                            <p>
                                At GemsandPearl.com, we do it simply and we do it at a large scale. We procure gemstones from mines, we certify them at the Government regulated Laboratories, and we list them as it is. That is how you get an untouched, unused Natural Gemstone for the maximum astrological benefits.
                            </p>
                            <div className='flex justify-center'>
                                <Button title='KNOW MORE' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={img} alt="stone img" className='w-fit xl:w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}