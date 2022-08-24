import mongoose from "mongoose";

const usersCollection = "users";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, max: 100, unique: true },
        name: { type: String, required: true, max: 50 },
        surname: { type: String, required: true, max: 50 },
        age: { type: Number, required: true, max: 120 },
        avatar: { type: String, required: true, max: 255 },
        role: { type: String, required: true, max: 50 },
        password: { type: String, required: true, max: 50 },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model(usersCollection, UserSchema);
export default User;
