"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const register_controller_1 = __importDefault(require("./auth/infrastructure/controllers/registerController/register.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3006;
app.get('/', (__req, res) => res.send('welcome to my app'));
app.post('/api/register', register_controller_1.default);
app.get('/api/login', (__req, res) => { res.send('login'); });
app.listen(PORT, () => console.log("Server running on port: " + PORT));
