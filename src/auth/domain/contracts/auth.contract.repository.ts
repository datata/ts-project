import { UserEntity } from "../user.entity";

export interface AuthContractRepository {
    registerUser(body: any): Promise<UserEntity>
}