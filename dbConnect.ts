import mongoose from "mongoose";

const connectDataBase = async () => {
    try {
        const URL: string = process.env.MONGO_DB_URL as string;

        mongoose.connect(URL);

        console.log("Database connected");
    } catch (error: any) {
        console.log(error.message);
    }
};

export default connectDataBase;
