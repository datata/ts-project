import { AuthContractRepository } from "../../../../domain/contracts/auth.contract.repository";
import { prisma } from "../../../../../config/db";

export class AuthRepository implements AuthContractRepository {
    async registerUser(newUser: any) {
        try {
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
}