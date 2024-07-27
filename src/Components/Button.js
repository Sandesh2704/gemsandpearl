import React from 'react'

export default function Button({ title }) {
    return (
        <>
            <button className='bg-black px-5 md:px-10 py-3 text-white w-fit text-xs md:text-sm tracking-[.1em] hover:bg-[#d69c3b]'>{ title }</button>
        </>
    )
}
