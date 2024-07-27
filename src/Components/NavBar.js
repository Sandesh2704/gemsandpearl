import React, { useEffect, useState } from 'react'
import logo from '../Assets/gemslogo.png'
import { PiHandbagLight } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoPerson } from "react-icons/go"
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import ind from '../Assets/CurrencyImg/IND.png'
import usa from '../Assets/CurrencyImg/USA.png'
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

export default function NavBar() {

  const currencyValue = [
    { value: 'INR', imgSRc: ind },
    { value: 'USA', imgSRc: usa }
  ]

  const [currency, setCurrency] = useState(currencyValue[0])
  const [curDropDownOpen, setCurDropDownOpen] = useState(false)
  const handler = () => {
    setCurDropDownOpen(!curDropDownOpen)
  }

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 70) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const [menu, setMenu] = useState(false)
  const menuHandler = () => {
    setMenu(!menu)
  }

  const [moblieDropdown, setMoblieDropdown] = useState(false)
  const moblieDropdownHandler = () => {
    setMoblieDropdown(!moblieDropdown)
  }

  const primarygemstones = [
    { link: '987654', value: 'sona' },
    { link: '98765432', value: 'sona' },
  ]

  return (
    <>
      <nav className='drop-shadow-sm bg-white grid grid-cols-2 md:grid-cols-3  items-center px-2 md:px-4 py-3 '>
        <div className='hidden md:flex items-center gap-6'>
          <div className='hidden lg:flex items-center bg-[#eee] w-44  text-black rounded-md px-2' >
            <span className='text-xl mr-2'><CiSearch /></span>
            <input type="text" placeholder='Search...' className='bg-transparent outline-none py-2 text-base mr-5' />
          </div>
          <div className='relative '>
            <div className='flex items-center gap-1' onClick={handler}>
              <img src={currency.imgSRc} alt={currency.value} className='w-6 ' />
              <h1 className=' text-[15px]'>{currency.value}</h1>
              <FaAngleDown size={13} color='cursor-pointer' />
            </div>
            <div className={`absolute mt-4 border w-28 rounded-lg ${curDropDownOpen === false ? 'hidden' : "block"}`}>
              {currencyValue.map((item, index) => (
                <div key={index} className={`bg-white drop-shadow-md text-xs py-2 pl-3 cursor-pointer ${index === item.length - 1 ? "border-b-none rounded-b-lg" : "border-b rounded-b-none"}
                  ${index === 0 ? "rounded-t-lg" : "rounded-t-none"}`} onClick={handler}>
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=' flex justify-center'>
          <img src={logo} alt="Gems & Pearl Logo" className='w-72' />
        </div>

        <div className='flex justify-end text-xl gap-2 md:gap-3 lg:gap-4'>
          <span className='hidden md:flex bgcolor p-2 rounded-full hover:text-[#c404d9]'>
            <BiSolidPhoneCall />
          </span>
          <span className='bgcolor p-2 rounded-full hover:text-[#c404d9]'>
            <GoPerson />
          </span>
          <span className='bgcolor relative  p-2 rounded-full hover:text-[#c404d9]'>
            <PiHandbagLight />
            <span className='absolute -top-2 right-0 bg-black text-white text-xs px-1 rounded-full'>{0}</span>
          </span>
        </div>
      </nav>

      <nav class='relative z-50 sticky top-0'>
        <div class={` items-center ${isVisible === true ? "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-white drop-shadow-sm" : "grid grid-cols-1 bg-[#ffefce] "} py-2 lg:py-4 px-3 md:px-6 xl:px-20`}>
          <span className='flex  lg:hidden text-3xl rounded-full ' onClick={menuHandler}>
            <IoIosMenu />
          </span>
          <div className={`text-xs xl:text-[13px] font-semibold hidden lg:flex justify-center gap-x-9 xl:gap-x-16 ${isVisible === true ? "col-span-2 xl:col-span-4" : "col-span-1 "}`}>
            <span>PRIMARY GEMSTONES</span>
            <span>SUBSTITUTE GEMSTONES</span>
            <span>CHOOSE YOUR GEMSTONE</span>
            <span>TELL US YOUR PROBLEM</span>
          </div>

          <div className={`${isVisible === true ? " flex justify-end" : "hidden"} text-xl gap-2 xl:gap-5 lg:gap-4' `}>
            <span className='bgcolor p-2 rounded-full hover:text-[#c404d9]'>
              <CiSearch />
            </span>
            <span className='hidden md:flex bgcolor p-2 rounded-full hover:text-[#c404d9]'>
              <BiSolidPhoneCall />
            </span>
            <span className='bgcolor p-2 rounded-full hover:text-[#c404d9]'>
              <GoPerson />
            </span>
            <span className='bgcolor relative  p-2 rounded-full hover:text-[#c404d9]'>
              <PiHandbagLight />
              <span className='absolute -top-2 right-0 bg-black text-white text-xs px-1 rounded-full'>{0}</span>
            </span>
          </div>
        </div>

        <div className="fixed top-0  left-0 h-full w-[85%] sm:w-[40%]  bg-white shadow-lg transition-transform transform duration-500 ease-in-out text-base "
          style={{ transform: menu ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div className='relative flex justify-center py-4 border-b-2'>
            <img src={logo} alt="Gems & Pearl Logo" className='w-40 ' />
            <div className='absolute right-2 text-2xl rounded-full hover:text-[#c404d9]' onClick={menuHandler}>
              <IoMdClose />
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <div className='flex justify-between items-center px-4 py-3 border-b-2' onClick={moblieDropdownHandler}>
              <h1>PRIMARY GEMSTONES</h1>
              <div className='text-xl'>
                <IoMdAdd />
              </div>
            </div>
            <div className={`flex flex-col transition-transform transform duration-500 ease-in-out`}>
              {
                primarygemstones.map((item, index) => (
                  <div key={index} className='px-4 py-3 border-b-2'>
                    {item.value}
                  </div>
                ))
              }
            </div>
            <div className='flex justify-between items-center px-4 py-3 border-b-2' onClick={moblieDropdownHandler}>
              <h1>UBSTITUTE GEMSTONES</h1>
              <div className='text-xl'>
                <IoMdAdd />
              </div>
            </div>
            <div className=' px-4 py-3 border-b-2' onClick={moblieDropdownHandler}>
              <h1>CHOOSE YOUR GEMSTONE</h1>

            </div>
            <div className=' px-4 py-3 border-b-2' onClick={moblieDropdownHandler}>
              <h1>TELL US YOUR PROBLEM</h1>

            </div>
          </div>
        </div>
      </nav>





    </>
  )
}
