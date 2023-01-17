import express, { Request, Response } from "express";
require('dotenv').config();
import registerController from "./auth/infrastructure/controllers/registerController/register.controller";
import loginController from "./auth/infrastructure/controllers/loginController/login.controller";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3006

app.get('/', (__req: Request, res: Response) => res.send('welcome to my app'))

app.post('/api/register', registerController);
app.post('/api/login', loginController);

app.listen(PORT, () => console.log("Server running on port: " + PORT));
