import { Request, Response } from "express";
import User, { IUser } from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';


function createToken(user: IUser) {
   return  jwt.sign({ id: user.id, email: user.email}, config.jwtSecret )//, { expiresIn: 86400}) // sign es un metodo que nos permite generar un token 
}


export const signUp = async (req: Request, res: Response) => {
    if(!req.body.email && !req.body.password) {
        return res.status(400).json({msg: 'Please send your email and password'})
    }

    const user = await User.findOne({email: req.body.email});

    if(user) {
        return res.status(400).json({msg: 'The user already exist'});
    }
    else {
        const newUser = new User(req.body);
        await newUser.save()
        res.status(200).json(newUser)
    }
}

export const signIn = async (req: Request, res: Response) => {
    if(!req.body.email && !req.body.password) {
        return res.status(400).json({msg: 'Please send your email and password'})
    }

    const user = await User.findOne({email: req.body.email});

    if(!user) {
        return res.status(400).json({msg: 'The user does not exist'});
    }
    
    const isMatch = await user.comparePassword(req.body.password);
    if(isMatch) {
        res.status(200).json({token: createToken(user)})
    }

    return res.status(400).json({msg: 'The email or password are incorrect'})
    
}