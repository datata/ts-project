"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../../../config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, password } = body;
        const saltRounds = 10;
        const encryptedPassword = bcrypt_1.default.hashSync(password, saltRounds);
        const newUser = {
            email,
            name,
            password: encryptedPassword
        };
        const user = yield db_1.prisma.user.create({
            data: newUser
        });
        return user;
    }
    finally {
        db_1.prisma.$disconnect;
    }
});
exports.default = register;
