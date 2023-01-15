import { Request, Response } from "express";
import { z, ZodError } from "zod";
import register from "../../../application/services/registerService/register.service";
import { PrismaException } from "../../../domain/exceptions/prisma.exception";
import { UserEntity } from "../../../domain/user.entity";

const registerController = async (req: Request, res: Response) => {
    try {
        let { email, name, password } = req.body;

        const userDTO: UserEntity = {
            email,
            name,
            password
        }

        const requestValidation = z.object({
            email: z.string(),
            name: z.string(),
            password: z.string(),
        });

        requestValidation.parse(userDTO);

        await register(userDTO);

        return res.status(200).json({
            success: true,
            message: "User registered"
        });
    } catch (error: any) {
        if (error instanceof PrismaException) {
            return res.status(400).json({
                success: false,
                message: "User can´t be registered",
                error: error
            });
        }

        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "User can´t be registered",
                error: error?.errors
            });
        }

        return res.status(500).json({
            success: false,
            message: "User can´t be registered",
            error: "User can't be registered"
        });
    }
}

export default registerController 