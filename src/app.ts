import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3006

app.get('/', (__req: Request, res: Response) => res.send('welcome to my app'))

//Auth
app.post('/api/register', (req: Request, res: Response) => {
    const { email, name, password} =  req.body;

    const saltRounds: number = 10;
    const encryptedPassword: string = bcrypt.hashSync(password, saltRounds);
    
    const newUser = {
        email,
        name,
        password: encryptedPassword
    }
    
    //TODO save new user into DB

    return res.status(200).json({
        success: true,
        message: "User registered"
    })
});

app.get('/api/login', (__req: Request, res: Response) => {res.send('login')});


app.listen(PORT, () => console.log("Server running on port: " + PORT));
