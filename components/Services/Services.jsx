"use client"

import React from 'react';
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Service from './Service';

const Services = () => {
    const [data] = useFetch('services');

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            <Heading title="Services" />

            {/* services  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.map(service => (
                    <Service  {...service} />
                ))}
            </div>
        </section>
    )
}

export default Services