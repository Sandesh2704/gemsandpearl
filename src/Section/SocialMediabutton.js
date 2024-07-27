import React, { useEffect, useState } from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaWhatsapp } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdArrowRoundUp } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import chatIMG from '../Assets/otherimg/chatboximg.svg'
import { BsChatSquareTextFill } from "react-icons/bs";

export default function SocialMediabutton() {

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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [chatBoxShow, setChatBoxShow] = useState(false)
  const chatBoxShowHandler = () => {
    setChatBoxShow(!chatBoxShow)
  }

  return (
    <>
      <div className='fixed bottom-12 right-2  lg:bottom-5 lg:right-5 '>
        <div className='flex flex-col text-2xl gap-y-2 text-white '>
          <span className='hidden md:flex bg-green-600 p-3 rounded-full '>
            <FaWhatsapp />
          </span>
          <span className='bg-blue-600 p-3 rounded-full' onClick={chatBoxShowHandler}>
            <HiChatBubbleLeftRight />
          </span>
          <span className={`bg-black p-3 rounded-full  ${isVisible === true ? "flex" : "hidden"}`} onClick={goToTop}>
            <IoMdArrowRoundUp />
          </span>
        </div>
      </div>

      <div className='fixed md:hidden bottom-0 text-white grid grid-cols-2 w-full'>
        <div className='bg-green-600 flex items-center gap-2 justify-center py-2'>
          <FaWhatsapp />
          <span>Chat Now</span>
        </div>
        <div className='bg-blue-600 flex items-center  gap-2 justify-center py-2'>
          <BiSolidPhoneCall />
          <span>Call Us</span>
        </div>
      </div>

      <div className={`z-50 fixed bottom-3 right-2  w-[95%] md:w-[50%] xl:w-[25%]  xl:w-[25%]  lg:bottom-5 lg:right-5  flex-col  transition-transform transform duration-500 ease-in-out`} style={{ transform: chatBoxShow ? 'translateY(0)' : 'translateY(+200%)' }}>
        <div className='flex justify-end '>
          <div className='bg-blue-600 p-3 lg:p-4 text-white text-xl rounded-full  shadow-2xl' onClick={chatBoxShowHandler}>
            <FaAngleDown />
          </div>
        </div>

        <div className='text-white   mt-3 bg-blue-600 rounded-2xl flex flex-col shadow-2xl'>
          <div className='px-4 lg:px-6 py-8  rounded-t-2xl flex items-center text-white text-2xl font-semibold gap-2 md:gap-3'>
            <span className='bg-blue-800 p-3 rounded-full' onClick={chatBoxShowHandler}>
              <HiChatBubbleLeftRight />
            </span>
            <h1>Conversation(s)</h1>
          </div>
          <div className='rounded-b-2xl pt-28 pb-2  rounded-t-xl bg-white flex flex-col items-center justify-center '>

            <div className='gap-y-4 flex flex-col items-center justify-center mb-5'>
              <div className='flex  justify-center'>
                <img src={chatIMG} alt="chatIMG" className='w-36' />
              </div>

              <div className='text-gray-400 text-sm'>No ongoing conversation</div>
              <button className='text-sm  flex items-center bg-blue-600 py-2 px-4 gap-2 rounded'><BsChatSquareTextFill /> Chat Now</button>
            </div>

            <button className='text-xs text-gray-300 hover:text-gray-500 flex items-center shadow-md bg-white py-1 px-4 gap-2 rounded bottom-1'><BsChatSquareTextFill /> Driven by SalesIQ</button>
          </div>
        </div>
      </div>
    </>
  )
}
