import { Request, Response } from "express";
import { z, ZodError } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../../../../config/db";
import { PrismaException } from "../../../domain/exceptions/prisma.exception";

const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = {
            email,
            password
        }

        const loginSchemaValidation = z.object({
            email: z.string().min(1, 'Email is required'),
            password: z.string().min(1, 'Password is required'),
        });

        loginSchemaValidation.parse(user);

        const findUser = await prisma.user.findFirstOrThrow({
            where: {
                email
            }
        })

        const comparePassword = bcrypt.compareSync(password, findUser.password);

        if (!comparePassword) {
            throw new Error('Email or Password are not valid')
        }

        const token: string = jwt.sign(
            {
                id: findUser.id,
                email: findUser.email,
                name: findUser.name
            },
            'secret',
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            success: true,
            message: "Login successfully",
            token
        })
    } catch (error) {
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
            message: "Something went wrong, try again"
        })
    };
}

export default loginController;