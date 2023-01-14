import bcrypt from "bcrypt";
import { AuthRepository } from "../../../infrastructure/repository/prismaRepository/auth/auth.repository";

export interface User {
    email: string,
    name: string,
    password: string
}

const register = async (body: User): Promise<any> => {
    const { email, name, password } = body;

    const saltRounds: number = 10;
    const encryptedPassword: string = bcrypt.hashSync(password, saltRounds);

    const newUser: User = {
        email,
        name,
        password: encryptedPassword
    };

    const authRepository: AuthRepository = new AuthRepository();
    const user = authRepository.registerUser(newUser);

    return user;
}


export default register