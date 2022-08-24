import { Request, Response } from "express";

import usersService from "../services/users.service";
import { ClientUser } from "../types/UserInterface";
import { RequestInterface } from "../types/RequestInterface";

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = (await usersService.getUser(
            (req as RequestInterface).email
        )) as ClientUser;

        if (user) {
            console.log(
                `The user with id ${
                    (user as ClientUser)?.id
                } was getted with success.`
            );
            return res
                .status(200)
                .send({ ...user, id: user._id } as ClientUser);
        } else {
            console.log(
                `The user with id ${
                    (user as ClientUser)?.id
                } wasn't getted with success.`
            );
            return res.status(404);
        }
    } catch (error: any) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};
