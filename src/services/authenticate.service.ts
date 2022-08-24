import jwt from "jsonwebtoken";

import UserModel from "../models/userModel";

class AuthenticateService {
    async login({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    } | null> {
        const user = await UserModel.findOne({ email });

        if (user?.password === password) {
            console.log(
                `The user with email ${user?.email} was getted with success`
            );
            return { token: this.generateToken(user?.email) };
        } else {
            console.log(
                `The user with email ${user?.email} wasn't getted with success`
            );
            return null;
        }
    }

    generateToken(email: string) {
        return jwt.sign(email, process.env.SECRET as string);
    }
}

export default new AuthenticateService();
