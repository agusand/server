import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { RequestInterface } from "../types/RequestInterface";

const verifyTokenExists = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers["authorization"] as string;

    if (bearerHeader) {
        const token = bearerHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET as string, (error, email) => {
            if (error) {
                res.status(403).send("Invalid token.");
            } else {
                (req as RequestInterface).email = email as string;
                next();
            }
        });
    } else {
        res.status(403).send("There's no token.");
    }
};

export default verifyTokenExists;
