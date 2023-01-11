"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3006;
app.get('/', (__req, res) => res.send('welcome to my app'));
app.get('/api/login', (__req, res) => res.send('login'));
app.get('/api/register', (__req, res) => res.send('register'));
app.listen(PORT, () => console.log("Server running on port: " + PORT));
