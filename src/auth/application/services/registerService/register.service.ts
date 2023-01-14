import { prisma } from "../../../../config/db";
import bcrypt from "bcrypt";

export interface User {
    email: string,
    name: string,
    password: string
}

const register = async (body: User): Promise<any> => {
    try {
        const { email, name, password } = body;

        const saltRounds: number = 10;
        const encryptedPassword: string = bcrypt.hashSync(password, saltRounds);

        const newUser: User = {
            email,
            name,
            password: encryptedPassword
        };

        const user = await prisma.user.create(
            {
                data: newUser
            }
        );

        return user;
    } finally {
        prisma.$disconnect;
    }
}


export default register