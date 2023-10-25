import React from 'react'
import Image from 'next/image'

const NavBrand = () => {
    return (
        <div className="flex items-center space-x-4">
            <Image 
                src="/favicon.png"
                alt="logo"
                width={32}
                height={32}
                className='select-none'
            />
            <h1 className="text-3xl font-semibold text-blue-600 brand-font select-none">E-Pharma</h1>
        </div>
    )
}

export default NavBrand