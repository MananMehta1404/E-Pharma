import { connectToDB } from '@/utils/database'
import User from '@/models/user'
import bcrypt from 'bcryptjs'
import Cart from '@/models/cart'

export const POST =  async (req, res) => {
    const {name, email, password} = req.json();

    console.log(req.json());

    try {
        await connectToDB();

        if(!name || !email || !password){
          return res.status(422).json({error:"Please fill up all the fields"})
        }

        const user = await User.findOne({email})

        if(user){
            return res.status(422).json({error:"User already exists with that email"})
        }

        const hashedPassword = await bcrypt.hash(password,12)

        const newUser =  new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save();

        await new Cart({user: newUser._id}).save()

        // return new Response(JSON.stringify(newUser), { status: 201 });

        res.status(201).json({message:"Signup Success"})

    } catch(err) {
        console.log(err);
    }
}