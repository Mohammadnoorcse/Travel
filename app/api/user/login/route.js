import {NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import User from "@/app/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req){
   await connectDB();
   const {email,password} = await req.json();
   if(!email || !password){
      return NextResponse.json({
         msg: "All Fields are  Mandatory !"
      })
   }

   const emailExists = await User.findOne({email});
   if(!emailExists){
      return NextResponse.json({
         msg:"Please Register first !"
      })
   }

   const passwordMatched = await bcrypt.compare(password,emailExists.password);
   try {
      if(passwordMatched){
         const token = jwt.sign({token:emailExists._id},process.env.JWT_SECRET,{
            expiresIn: "30d",
         })
         return NextResponse.json({
            msg:"Logged in successfully !",
            token
         })
      }else{
         return NextResponse.json({
            msg:"Please Correct Email and Password !"
         })
      }

   } catch (error) {
      return NextResponse.json({
         msg:"Error loggin user",
         error:error.message
      })
   }


}