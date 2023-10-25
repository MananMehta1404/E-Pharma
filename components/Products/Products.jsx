"use client"

import React from 'react';
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Product from './Product';

const Products = () => {
    const [data] = useFetch('products');
    
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            <Heading title="Products" />

            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.slice(0,6).map(product => (
                    <Product {...product} />
                ))}
            </div>
                
        </section>
    )
}

export default Products
