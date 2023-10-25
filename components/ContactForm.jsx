"use client"

import React from 'react';
import TextField from './Form/TextField';

const ContactForm = () => {

    //form inputs
    const Inputs = [
        { id: 1, type: "text", placeholder: "Full Name" },
        { id: 2, type: "email", placeholder: "Email" },
        { id: 3, type: "number", placeholder: "Phone Number" },
    ]
    return (
        <form className="w-full p-6 flex flex-col justify-center mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
                {Inputs.map(input => (
                    <TextField
                        key={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                    />
                ))}
            </div>

            {/* text field  */}
            <div className="mt-6">
                <textarea placeholder="Your Message" className="w-full px-4 py-3 h-36 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none"></textarea>
            </div>

            {/* submit button  */}
            <button type="submit" className="btn-primary px-6 py-3 w-36 mt-6">
                Submit
            </button>

        </form>

    )
}

export default ContactForm
