"use client";

import React from 'react';
import Button from '../Form/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Service = (props) => {
    const { title, icon, description, id } = props;
    const router = useRouter();

    const handleClick = () => {
        router.push(`/service/${id}`);
    }

    return (
        <div key={id} className="flex flex-col justify-center items-center space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 p-4 box-border rounded-xl">
            <Image src={icon} alt={title} width={100} height={100} />
            <h1 className="text-gray-600 poppins text-xl text-center">{title}</h1>
            <p className="text-gray-500 text-center">{description.slice(0, 70)}</p>
            <Button className="w-36 btn-primary py-3 px-2 poppins text-sm" text="Learn More" onClick={handleClick} />
        </div>
    )
}

export default Service