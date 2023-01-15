import bcrypt from "bcrypt";
import { UserEntity } from "../../../domain/user.entity";
import { UserValue } from "../../../domain/User.value";
import { AuthRepository } from "../../../infrastructure/repository/prismaRepository/auth/auth.repository";

export interface User {
    email: string,
    name: string,
    password: string
}

const register = async (userDTO: UserEntity): Promise<any> => {
    const encryptedPassword = encryptPassword(userDTO.password);

    const newUser = new UserValue(userDTO.name, userDTO.email, encryptedPassword);

    const authRepository: AuthRepository = new AuthRepository();
    const user = await authRepository.registerUser(newUser);
    
    return user;
}

const encryptPassword = (password: string) => {
    const saltRounds: number = 10;
    const encryptedPassword: string = bcrypt.hashSync(password, saltRounds);

    return encryptedPassword;
}


export default register;