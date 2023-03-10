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
const register_service_1 = __importDefault(require("../../../application/services/registerService/register.service"));
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, register_service_1.default)(req.body);
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
});
exports.default = registerController;
