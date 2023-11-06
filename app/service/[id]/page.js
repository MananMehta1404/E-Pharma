"use client"

import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import useFetch from '../../../hooks/useFetch';
import Link from 'next/link';

const ServicesDetailScreen = ({ params }) => {
    const id = params.id;
    const [data] = useFetch('services');

    let service = Object;
    for(let i = 0; i < data.length; i++) {
        console.log(data[i].id);
        if(data[i].id == id) service = data[i];
    }

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6">
            <div key={service.id} className="shadow-lg p-6 box-border">
                {/* cover image  */}
                <img className="w-full h-96 mx-auto object-cover rounded-lg" src={service.image} alt="coverimg" />
                {/* title and icon  */}
                <div className="flex flex-col md:flex-row lg:flex-row  justify-center items-center space-x-3 py-4">
                    <img className="w-12 mt-4" src={service.icon} alt="icon" />
                    <h1 className="text-gray-600 poppins text-3xl text-center pt-3">{service.title}</h1>
                </div>
                {/* description  */}
                <p className="text-gray-500 text-justify">{service.description}</p>
                <Link href="/" className="pt-4 text-blue-500 text-sm hover:underline flex items-center space-x-3"><BsArrowLeft /> <span>Back</span></Link>
            </div>
        </section>
    )
}

export default ServicesDetailScreen
