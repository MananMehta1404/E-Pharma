"use client"

import React from 'react';
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [data] = useFetch('testimonial')

    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-24">
            {/* heading  */}
            <Heading title="Testimonials" />

            {/* testimonials  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.slice(0,3).map(item => (
                    <Testimonial  {...item} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials
