import { AuthContractRepository } from "../../../../domain/contracts/auth.contract.repository";
import { prisma } from "../../../../../config/db";
import { PrismaException } from "../../../../domain/exceptions/prisma.exception";
import { UserValue } from "../../../../domain/User.value";
import { UserEntity } from "../../../../domain/user.entity";

export class AuthRepository implements AuthContractRepository {
    async registerUser(newUser: UserValue): Promise<UserEntity> {
        try {
            const user = await prisma.user.create(
                {
                    data: newUser
                }
            );

            return user;
        } catch (error) {
            throw new PrismaException(error);
        } finally {
            prisma.$disconnect;
        }
    }
}