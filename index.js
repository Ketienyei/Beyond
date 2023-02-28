import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()

const connect = async () => {
try {
    await mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO);
    console.log("Conected to MONGODB")
}catch(error) {
    throw error;
}
};

app.listen (3000,()=>{
    connect()
    console.log("Connected to backend");
});
