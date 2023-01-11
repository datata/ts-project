import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3006

app.get('/api/login', (__req: Request, res: Response) => res.send('login'));

app.listen(PORT, () => console.log("Server running on port: " + PORT));
