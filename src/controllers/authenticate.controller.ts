import { Request, Response } from "express";

import authenticateService from "../services/authenticate.service";

export const login = async (req: Request, res: Response) => {
    try {
        const token = await authenticateService.login(req?.body);

        if (token) {
            console.log(
                `The user with email ${req?.body?.email} was authenticated with success.`
            );
            return res.status(200).send(token);
        } else {
            console.log(
                `The user with email ${req?.body?.email} wasn't authenticated with success.`
            );
            return res.status(404);
        }
    } catch (error: any) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};
