import { connectToDB } from '@/utils/database'
import User from '@/models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

connectToDB()

export async function POST(req, res) {
    const { email, password } = await req.json();
    
    try{
        if(!email || !password) {
            return NextResponse.json({ error: "Please fill up all the fields" }, { statusCode: 422 });
            // return res.status(422).json({error:"please fill all the fields"})
        }

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({ error: "User don't exit with that email"}, { statusCode: 404});
            // return res.status(404).json({error:"user dont exists with that email"})
        }

        const doMatch =  await bcrypt.compare(password,user.password)

        if(doMatch){
            const token =  jwt.sign({userId:user._id},process.env.JWT_SECRET,{
                expiresIn:"7d"
            })

            const { name,email } = user

            return NextResponse.json({ token, user: { name, email } }, { statusCode: 201 });
            // res.status(201).json({token, user: {name, email}})
        } else{
            return NextResponse.json({ error: "Invalid Email or Password"});
            // return res.status(401).json({error:"email or password dont match"})
        }
    } catch(err) {
        return NextResponse.json({ error: err }, { statusCode: 500 });
        // console.log(err)
    }
}