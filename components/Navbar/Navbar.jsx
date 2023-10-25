"use client"

import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import NavBrand from './NavBrand';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    const [changeHeader, setChangeHeader] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Products', to: '/products' },
        { id: 3, text: 'Contact', to: '/contact' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    function isActive(route){
        if(route === router.pathname){
            console.log(route)
            console.log(router.pathname)
            return true
        }
        else false
     }

    // change header by scrolling
    if(typeof window !== 'undefined') window.addEventListener('scroll', onChangeHeader)

    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            {/* desktop nav  */}
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* brand  */}
                <div className="flex flex-grow">
                    <NavBrand />
                </div>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-8">
                    <ul className="flex items-center space-x-4">
                        {menu.map(item => (
                            <li key={item.id}>
                                <Link href={item.to} className={isActive(item.to) ? "border-b-4 border-blue-600 text-blue-700" : "text-gray-600 text-lg poppins"}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <nav className="bg-white shadow-lg mx-6 mt-2 p-4 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                    <ul className="mb-2">
                        {menu.map(item => (
                            <li key={item.id} className="mb-3">
                                <Link href={item.to} className="text-gray-600 poppins text-lg text-center py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default block rounded-lg">
                                {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>
            )}
        </header>
    )
}

export default Navbar