import {NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import User from "@/app/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
    await connectDB();

    const { name, email, password } = await req.json();
    

    if (!name || !email || !password) {
        return NextResponse.json({
            msg: "All Fields are Mandatory !"
        });
    }
    
 
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        return NextResponse.json({
            msg: "User already Registered"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        const result = await newUser.save();
        const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
            expiresIn: "30d"
        });
        return NextResponse.json({
            msg: "Registered Successfully !",
            token
        });
    } catch (error) {
        return NextResponse.json({
            msg: "Error registering user",
            error: error.message
        });
    }
}
