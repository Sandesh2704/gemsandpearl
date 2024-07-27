import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import banner from '../Assets/BackgroundImg/banner-sec4.jpg'
import { IoDiamondSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { FaRightLeft } from "react-icons/fa6";
import { ImEarth } from "react-icons/im";
import { PiHandsPraying } from "react-icons/pi";
import { BsBarChartLineFill } from "react-icons/bs";
import { RiMedalFill } from "react-icons/ri";
import Button from '../Components/Button';

export default function WhyChooseUs() {
    return (
        <>
            <section className='flex flex-col justify-center py-10  px-4 xl:px-44'  style={{ backgroundImage: `url(${banner})` }}>
                <div className='md:px-5'>
                    <SectionTitle title='Why Choose Us? ' />
                    <p className='text-sm md:text-[15px] text-center text-gray-600 mt-3'>GemsandPearl.com is an eCommerce platform dealing primarily in natural gemstones. Our journey, which was once embarked upon through offline channels, has now expanded to the virtual realm, bringing you the timeless allure of Natural gemstones from the comfort of your screen.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 flex justify-center'>
                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <RiMedalFill />
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>Certified Natural Gemstones</p>
                    </div>
                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <IoDiamondSharp/>
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>Fair Pricing (Unused Gemstone segment)</p>
                    </div>
                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <FaRightLeft/>
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>Return policy</p>
                    </div>

                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <ImEarth/>
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>Global Shipping</p>
                    </div>                   
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 flex justify-center lg:px-20 xl:px-32'>
                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <FaCheck/>
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>Authenticity you can count on</p>
                    </div>
                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <BsBarChartLineFill/>
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>A wide array of gemstone choices</p>
                    </div>
                    <div className='flex flex-col bg-white drop-shadow-lg px-4'>
                        <div className='flex justify-center '>
                            <span className='p-3 bg-[#d69c3b] text-xl w-fit text-white'>
                                <PiHandsPraying/>
                            </span>
                        </div>
                        <p className='text-center text-2xl text-font py-7'>Empowered with Energisation/Pooja</p>
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <Button title='KNOW MORE'/>
                </div>
            </section>
        </>
    )
}
