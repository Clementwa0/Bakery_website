'use client'
import React from 'react'
import Image from 'next/image'

const custombtn = () => {
    return (
        <button
            disabled={false}
            type={'button'}
            className='border-t-cyan-900'
            onClick={() => { }}>
            <span className='flex flex-1'>
                title
            </span>
        </button>
    )
}

export default custombtn