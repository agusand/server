import jwt from "jsonwebtoken";

import { ClientUser } from "../types/UserInterface";
import UserModel from "../models/userModel";

class UsersService {
    async getUser(email: string): Promise<ClientUser | null> {
        const user = (await UserModel.findOne({
            email,
        })) as ClientUser;

        if (user) {
            console.log(
                `The user with id ${
                    (user as ClientUser)?.id
                } was getted with success`
            );
            return user;
        } else {
            console.log(
                `The user with id ${
                    (user as ClientUser)?.id
                } wasn't getted with success`
            );
            return null;
        }
    }
}

export default new UsersService();
