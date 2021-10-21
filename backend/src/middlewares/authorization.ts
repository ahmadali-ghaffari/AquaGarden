import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {dbConnection} from '../config';
import jwtDecode from 'jwt-decode'
import HttpException from "../exceptions/http-exception";

export interface SolvedToken {
    id: number,
    name: string,
    email: string,
    admin: boolean
}

export interface IGetUserAuthInfoRequest extends Request {
    user?: SolvedToken
}

const verifyToken = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers.authorization;    

    if (!bearerHeader) {
        throw new HttpException(403, 'There is no token')
    }

    try {
        const bearer: string[] = bearerHeader.split(' ');
        const token: string = bearer[1];
        jwt.verify(token, `${dbConnection.token.key}`, (err: jwt.VerifyErrors | null, decoded: jwt.JwtPayload | undefined) => {

            if (err) {
                console.log(err);
                throw new HttpException(403, 'Invalid token')
            } else {
                const solvedToken: any = jwtDecode(token);
 
                req.user = solvedToken.user as SolvedToken;
                next()
            }
        })
    } catch (err) {
        throw new HttpException(403, 'Invalid token')
    }
}

export default verifyToken;
