import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import gicon from '../Assets/otherimg/g-icon.png'
import google from '../Assets/otherimg/google-reviewlogo.jpg'
import { LuChevronLeftCircle } from "react-icons/lu";
import { LuChevronRightCircle } from "react-icons/lu";
import Slider from "react-slick";
import { TiStarFullOutline } from "react-icons/ti";
import Button from '../Components/Button'

export default function ClientsComments() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1300,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipeToSlide: true,
        cssEase: "ease-in-out",
        responsive :[
            {
                breakpoint : 876,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll:1,
                    }
            }
        ]
    };

    const comment = [
        {
            name: 'Rupam Bannerjee',
            comment: 'this company provided me very high quality Amethyst in very less price. I compared it online and choose this website. People here speak very politely. I verified the certificate too. So I am happy. If Amethyst suits me, I will but Neelam and emerald from you.'
        },
        {
            name: 'Mahesh Bhatnagar',
            comment: 'I had a great service and timely communication. I am very happy with my rings. I will for sure advice other to order here as well!! Thank you GemsandPearl team. Also great work from Aryan, never rushed me into buying and gave me genuine advice on each step. Thanks, Cheers !!!!'
        },
        {
            name: 'Rishi Srivastava',
            comment: 'Very happy to write here about my experience - I just received two rings from this company GemsandPearl, one in elegant Sterling Silver with Amethyst and the other in Panchdhatu with Red Coral. the rings turned out to be very luxurious, every detail is thought out, everything I wanted. for this I am very grateful to Mr. Shukla, he is a very high level professional , he will always give the best advice and and will do his best to fulfill the desire of the customer. Thanks a lot.'
        },
        {
            name: 'Shruti Deshpande',
            comment: 'this company provided me very high quality Amethyst in very less price. I compared it online and choose this website. People here speak very politely. I verified the certificate too. So I am happy. If Amethyst suits me, I will but Neelam and emerald from you.'
        },

    ]

    return (
        <>
                <div className='py-12 px-3 md:px-7  xl:px-48 flex flex-col  bg-gray-100'>
                    <SectionTitle title='What Clients Are Saying' />
                    <Slider {...settings} className='mt-6 '>
                        {
                        comment.map((item, index) => (
                            <div className='p-2 lg:p-3 ' key={index}>
                                <div className=' p-6 bg-white  flex items-center flex-col justify-center z-10 border border-gray-300 h-80 lg:h-96 rounded-lg'>
                                    <p className='text-sm md:text-base  text-center leading-normal xl:leading-loose text-[#3c3836]'>{item.comment}</p>
                                    <div className='flex gap-2 items-center mt-3'>
                                        <img src={gicon} alt="gIcon" className='w-4 md:w-6' />
                                        <div className='color flex items-center text-lg md:text-xl'><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /></div>
                                    </div>
                                    <b className='mt-3 md:mt-6 text-2xl text-font '>{item.name}</b>
                                </div>
                            </div>
                            ))
                        }
                    </Slider>
                    <div className='flex justify-center items-center gap-4 md:gap-5 mt-5'>
                        <img src={google} alt="google"  className='w-36 lg:w-40 rounded-lg'/>
                        <div>
                        <Button title='READ MORE REVIEWS'/>
                        </div>
                 

                    </div>
            </div>
        </>
    )
}

const NextArrow = ({ onClick }) => (
    <div
        className="absolute z-10 right-3 top-1/2 transform -translate-y-1/2   rounded-full flex  cursor-pointer "
        onClick={onClick}
    >
        <LuChevronRightCircle className='text-[#d69c3b]  text-2xl lg:text-3xl hover:rounded-full  hover:text-white hover:bg-[#d69c3b]'/>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute z-10  left-3 top-1/2 transform -translate-y-1/2  rounded-full  flex cursor-pointer "
        onClick={onClick}
    >
        <LuChevronLeftCircle className='text-[#d69c3b]  text-2xl lg:text-3xl hover:rounded-full  hover:text-white hover:bg-[#d69c3b]' />
    </div>
);

