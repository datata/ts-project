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
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../../../../config/db");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    try {
        const saltRounds = 10;
        const encryptedPassword = bcrypt_1.default.hashSync(password, saltRounds);
        const newUser = {
            email,
            name,
            password: encryptedPassword
        };
        yield db_1.prisma.user.create({ data: newUser });
        return res.status(200).json({
            success: true,
            message: "User registered"
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return res.status(400).json({
                success: false,
                message: "User can´t be registered",
                error: "User cant be registered"
            });
        }
        return res.status(500).json({
            success: false,
            message: "User can´t be registered",
            error: "User cant be registered"
        });
    }
    finally {
        db_1.prisma.$disconnect;
    }
});
exports.default = registerController;
