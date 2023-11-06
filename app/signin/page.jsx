"use client"

import React, { useState } from 'react'
import Brand from '../../components/Brand'
import Button from '../../components/Form/Button'
import TextField from '../../components/Form/TextField'
import Link from 'next/link'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

const SignInScreen = () => {
    const router = useRouter();
    
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    })

    // handle change
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    //handle submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res =  await fetch('/api/users/signin',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              email: userInput.email,
              password: userInput.password
            })
        })

        const res2 = await res.json();
        if(res2.error) {
            M.toast({ html: res.error, classes: "red"})
        }
        else {
            console.log(res2);
            cookie.set('token', res2.token);
            cookie.set('user', res2.user);
            router.push('/');
        }

        if(res.ok){
            router.push('/')
        }
    }

    //form inputs
    const Inputs = [
        { id: 1, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
        { id: 2, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
    ]

    return (
        <main className="h-screen w-full banner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* image  */}
                <div className="hidden md:flex lg:flex flex-col justify-center items-center w-full h-screen">
                    <img className="w-4/4 mx-auto" src="/assets/signin.png" alt="signin" />
                </div>

                {/* form  */}
                <div className="flex flex-col justify-center items-center h-screen">
                    {/* logo  */}
                    <Brand />
                    {/* sign in form  */}
                    <form className="bg-white w-4/5 mt-6 p-4 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-6">
                            {Inputs.map(input => (
                                <TextField
                                    key={input.id}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    value={input.value}
                                    name={input.name}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                        <Button text="Sign In" />
                        <Link href="/signup">
                            <p className="text-base text-primary text-center my-6 hover:underline">Need an account ?</p>
                        </Link>

                    </form>
                </div>

            </div>
        </main>
    )
}

export default SignInScreen
