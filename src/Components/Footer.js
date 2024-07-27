import React, { useState } from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import logo from '../Assets/gemslogo.png'
import { FaAngleDown } from "react-icons/fa6";
export default function Footer() {

  const BrandProfile = [
    { href: '#', value: 'About US' },
    { href: '#', value: 'Blogs' },
    { href: '#', value: 'Gold Rate' },
    { href: '#', value: 'Gem Lab Certification' },
  ]

  const GetHelp = [
    { href: '/', value: 'Customs & Duties' },
    { href: '/', value: 'Order Status' },
    { href: '/', value: 'Buying Guide' },
    { href: '/', value: 'Shipping Policy' },
    { href: '/', value: 'Return & Refund' },
    { href: '/', value: 'Terms & Condition' },
    { href: '/', value: 'Carat To Ratti Converter' },
    { href: '/', value: 'Privacy' },
    { href: '/', value: 'Payment' },
    { href: '/', value: 'Contact' },
    { href: '/', value: 'FAQ' },
  ]

  const WorkingHours = [
    { title: 'Sales:', href: '/', value: ' Mon-Sun 9:30am - 09:30pm IST' },
    { title: 'Support:', href: '/', value: 'Mon-Sun 9:30am - 09:30pm IST' },
  ]

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='px-3 xl:px-8 bg-zinc-100'>
        <div className='grid grid-cols-12 xl:grid-cols-12  md:gap-y-4 py-4 md:py-12 text-[#3c3836]'>

          <div className='col-span-1 hidden xl:flex '>
          </div>

          <div className='col-span-12 md:col-span-6 lg:col-span-3 px-1 md:px-3'>
            <div className='flex md:hidden justify-between items-center py-3 md:py-0 md:mb-5' onClick={() => toggleItem(0)}>
              <h1 className='text-font md:font-normal text-lg md:text-[1.3rem]'>About Us</h1>
              <span className={`text-base text-xl px-2 flex md:hidden transition duration-200 ease-in-out ${activeIndex === 0 ? '-rotate-180' : 'rotate-0'}`}>  <FaAngleDown />  </span>
            </div>
            <div className={`flex-col ${activeIndex === 0 ? 'flex' : 'hidden md:flex'}`} >
              <div className='py-9'>
                <img src={logo} alt="logo" className='w-60 lg:w-72' />
              </div>
              <div className='flex flex-col gap-y-2 mb-3 '>
                <div className='flex items-center gap-3'>
                  <span className='bgcolor p-3 text-base  md:text-xl  rounded-full bg-[#d69c3b] text-white'>
                    <FiMail />
                  </span>
                  <h1 className='text-sm md:text-base leading-relaxed '>Hamilton House, 1st Floor, A Block,
                    Connaught Place, Delhi, India - 110001</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='bgcolor p-3  text-base  md:text-xl rounded-full bg-[#d69c3b] text-white'>
                    <BiSolidPhoneCall />
                  </span>
                  <h1 className='text-sm md:text-base'>+91 9910909250</h1>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='bgcolor p-3 text-base  md:text-xl rounded-full bg-[#d69c3b] text-white'>
                    <FiMail />
                  </span>
                  <h1 className='text-sm md:text-base'>experts@gemsandpearl.com</h1>
                </div>
              </div>
            </div>
          </div>



          <div className='col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2 px-1 md:px-3'>
            <div className='flex justify-between items-center py-3 md:py-0 md:mb-5' onClick={() => toggleItem(1)}>
              <h1 className='text-font md:font-normal text-lg md:text-[1.3rem]'>BRAND PROFILE</h1>
              <span className={`text-base text-xl px-2 flex md:hidden transition duration-200 ease-in-out ${activeIndex === 1 ? '-rotate-180' : 'rotate-0'}`}>  <FaAngleDown />  </span>
            </div>
            <div className={`flex-col mb-3 ${activeIndex === 1 ? 'flex' : 'hidden md:flex'}`} >
              {
                BrandProfile.map((item, index) => (
                  <a href='/' key={index} className='border-t border-gray-300 py-2 text-[0.9rem]'>{item.value}</a>
                ))
              }
            </div>
          </div>

          <div className='col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2 px-1 md:px-3'>
            <div className='flex justify-between items-center py-3 md:py-0 md:mb-5' onClick={() => toggleItem(2)}>
              <h1 className='text-font md:font-normal text-lg md:text-[1.3rem]'>GET HELP</h1>
              <span className={`text-base text-xl px-2 flex md:hidden transition duration-200 ease-in-out ${activeIndex === 2 ? '-rotate-180' : 'rotate-0'}`}>  <FaAngleDown />  </span>
            </div>
            <div className={`flex-col mb-3 ${activeIndex === 2 ? 'flex' : 'hidden md:flex'}`} >
              {
                GetHelp.map((item, index) => (
                  <a href='/' key={index} className='border-t border-gray-300 font-medium py-2 text-[0.9rem]'>{item.value}</a>
                ))
              }
            </div>
          </div>

          <div className='col-span-12 md:col-span-6 lg:col-span-3  px-1 md:px-3'>
            <div className='flex justify-between items-center py-3 md:py-0 md:mb-5' onClick={() => toggleItem(3)}>
              <h1 className='text-font md:font-normal text-lg md:text-[1.3rem]'>BRAND PROFILE</h1>
              <span className={`text-base text-xl px-2 flex md:hidden transition duration-200 ease-in-out ${activeIndex === 3 ? '-rotate-180' : 'rotate-0'}`}>  <FaAngleDown />  </span>
            </div>
            <div className={`flex-col mb-3 ${activeIndex === 3 ? 'flex' : 'hidden md:flex'}`} >
              {
                WorkingHours.map((item, index) => (
                  <a href='/' key={index} className='border-t border-gray-300 py-2 text-[0.9rem]'><span className='font-bold'>{item.title} </span>{item.value}</a>
                ))
              }
            </div>
          </div>

          <div className='col-span-1 hidden xl:flex '> </div>

        </div>
        <div className='flex justify-center text-center px-4  text-sm font-semibold md:gap-2 py-6 border-t border-black mb-5 md:mb-0'>
          <p className='tracking-[0.4px]'> <span className='color'>©2024</span> Powered by Gems & Pearl . All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
