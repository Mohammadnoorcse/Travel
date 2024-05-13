import {NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import User from "@/app/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req){
   await connectDB();
}