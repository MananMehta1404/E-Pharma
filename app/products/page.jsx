"use client"

import React from 'react';
import Heading from '../../components/Heading';
import ProductCard from '../../components/Products/ProductCard';
import useFetch from '../../hooks/useFetch';

const ProductsScreen = () => {
    const [data] = useFetch('products');

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6">
            {/* heading  */}
            <Heading title="Products" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.map(product => (
                    <ProductCard {...product} />
                ))}
            </div>
        </section>
    )
}

export default ProductsScreen
