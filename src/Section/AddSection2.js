import React from 'react'
import img1 from '../Assets/AddSectionImg/ad-banner1.jpg'
import img3 from '../Assets/AddSectionImg/sec5imgnew.jpeg'
import img2 from '../Assets/AddSectionImg/astro-cunsaltent-banner.jpg'
export default function AddSection2() {

    const img = [
        { value: 'img1', imgSrc: img1 },
        { value: 'img2', imgSrc: img2 },
        { value: 'img3', imgSrc: img3 },
    ]
    
    return (
        <>
            <div className='grid grid-cols-1  sm:grid-cols-3  gap-y-3 md:gap-x-5 lg:gap-x-8 px-3 md:px-5 lg:px-7'>
                {
                    img.map((item, index) => (
                        <img src={item.imgSrc} alt={item.value} key={index} className='gap-x-2 ' />
                    ))
                }
            </div>
        </>
    )
}
