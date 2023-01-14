import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
    // id?: bigint;
    name: string
    email: string
    password: string
    // updatedAt?: Date
    // createdAt?: Date

    constructor(
        // id: bigint,
        name: string,
        email: string,
        password: string,
        // updatedAt?: Date,
        // createdAt?: Date
    ) {
        // this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.name = name;
        // this.updatedAt = updatedAt;
        // this.createdAt = createdAt;
    }

}