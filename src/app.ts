import express, { Request, Response } from "express";
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3006

app.get('/', (__req: Request, res: Response) => res.send('welcome to my app'))
app.get('/api/login', (__req: Request, res: Response) => res.send('login'));
app.get('/api/register', (__req: Request, res: Response) => res.send('register'));


app.listen(PORT, () => console.log("Server running on port: " + PORT));
