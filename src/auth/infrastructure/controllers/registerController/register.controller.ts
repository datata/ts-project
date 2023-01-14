import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "../../../../config/db";

export interface User {
    email: string,
    name: string,
    password: string
} 

const registerController = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;

    try {
        const saltRounds: number = 10;
        const encryptedPassword: string = bcrypt.hashSync(password, saltRounds);

        const newUser: User = {
            email,
            name,
            password: encryptedPassword
        };

        await prisma.user.create({ data: newUser });

        return res.status(200).json({
            success: true,
            message: "User registered"
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            return res.status(400).json({
                success: false,
                message: "User can´t be registered",
                error: "User cant be registered"
            });
        }

        return res.status(500).json({
            success: false,
            message: "User can´t be registered",
            error: "User cant be registered"
        });
    } finally {
        prisma.$disconnect;
    }
}

export default registerController 