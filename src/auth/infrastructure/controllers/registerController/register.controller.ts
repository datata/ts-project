import { Request, Response } from "express";
import register from "../../../application/services/registerService/register.service";

export interface User {
    email: string,
    name: string,
    password: string
} 

const registerController = async (req: Request, res: Response) => {
    try {
        
        const user = await register(req.body);
        
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
    }
}

export default registerController 