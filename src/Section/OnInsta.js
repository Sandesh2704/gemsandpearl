import React from 'react'
import img1 from '../Assets/Insta/instaimg1.jpg'
import img2 from '../Assets/Insta/instaimg2.jpg'
import img3 from '../Assets/Insta/instaimg3.jpg'
import img4 from '../Assets/Insta/instaimg4.jpg'
import SectionTitle from '../Components/SectionTitle'

export default function OnInsta() {

  const InstaImages = [
    { title: 'img1', img: img1 },
    { title: 'img4', img: img2 },
    { title: 'img4', img: img3 },
    { title: 'img4', img: img4 },
  ]
  return (
    <>
    <div className=' px-4 md:px-10 xl:px-48 flex flex-col'>
        <SectionTitle title='Catch us on Instagram' />
        <section className='grid grid-cols-2 mt-8 grid-cols-2 lg:grid-cols-4  gap-4 md:gap-7 lg:gap-x-7 lg:mb-4'>
                {
                   InstaImages.map((item, index) => (
                        <img src={item.img} alt={item.title} key={index} className='w-full' />
                    ))
                }
            </section>
    </div>
    </>
  )
}
