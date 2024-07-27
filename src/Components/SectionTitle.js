import React from 'react'

export default function SectionTitle({ title }) {
    return (
        <div>
            <div className='text-font text-2xl md:text-3xl lg:text-4xl text-center'>{title}</div>
        </div>
    )
}
