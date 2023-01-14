import express, { Request, Response } from "express";
require('dotenv').config();
import cors from "cors";
import registerController from "./auth/infrastructure/controllers/registerController/register.controller";

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3006

app.get('/', (__req: Request, res: Response) => res.send('welcome to my app'))

app.post('/api/register', (__req: Request, res: Response) => { res.send('register') });
app.get('/api/login', (__req: Request, res: Response) => { res.send('login') });

app.listen(PORT, () => console.log("Server running on port: " + PORT));
