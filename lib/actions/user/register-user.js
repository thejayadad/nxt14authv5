'use server'
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"

export async function registerUser(formData){
    try {
        const {email, firstName, lastName, password} = formData
        const existingEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(existingEmail){
            return new Error("Email already in use")
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await prisma.user.create({
            data: {
                email, password: hashedPassword, firstName, lastName
            }
        })
        return user
    } catch (error) {
        console.log("Create Error " + error)
    }
}