import { connectToDB } from '@/utils/database'
import User from '@/models/user'
import bcrypt from 'bcryptjs'
import Cart from '@/models/cart'
import { NextResponse } from 'next/server'

export async function POST (req) {

    const { name, email, password } = await req.json();

    if(!name || !email || !password){
        return NextResponse.json({ error: "Please fill up all the fields" }, { statusCode: 422 });
        // return NextResponse.status(422).json({error:"Please fill up all the fields"});
        // return res.status(422).json({error:"Please fill up all the fields"})
    }

    try {
        await connectToDB();

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({ error: "User already exists with that email" }, { statusCode: 422 });
            // return res.status(422).json({error:"User already exists with that email"})
        }

        const hashedPassword = await bcrypt.hash(password,12)

        const newUser =  new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save();

        // await new Cart({user: newUser._id}).save()

        // return new Response(JSON.stringify(newUser), { status: 201 });

        return NextResponse.json({ message: "Signup Success" }, { statusCode: 201 });
        // res.status(201).json({message:"Signup Success"})
        // return NextResponse.status(201).json({message:"Signup Success"});

    } catch(err) {
        // return NextResponse.status(500).json({error: err});
        return NextResponse.json({ error: err }, { statusCode: 500 });
        // console.log(err);
    }
}