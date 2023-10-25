"use client"

import React from 'react';
import Button from '../Form/Button';
import Image from 'next/image';

const Banner = () => {

    return (
        <section className="max-w-screen-xl py-20 mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-12">
                
                <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                    <div className="flex flex-col space-y-2">
                        <Image src="/assets/banner/medal.png" alt="banner" width={100} height={100} />
                        <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed">Your Health, Our Priority – <br /> <span className="text-5xl">Delivering Wellness to Your Doorstep!</span></h1>
                        <p className="text-gray-500 text-light text-sm">Experience the World's Finest Products – Authenticity Guaranteed!<br/>Discover Our Store.</p>
                    </div>

                    <Button className="btn-primary py-3 px-4 poppins w-48 mt-6" text="Explore our shop" />

                </div>

                <div className="order-1 lg:order-2">
                    <Image src="/assets/banner/banner.png" alt="banner" width={600} height={600} />
                </div>

            </div>

        </section>
    )
}

export default Banner
