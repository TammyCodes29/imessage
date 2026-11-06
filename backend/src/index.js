import express from "express";
import "dotenv/config";
import cors from "cors";
import {clerkMiddleware} from "@clerk/clerk-sdk-node";

import User from "./models/user.model.js";
import {connectDB} from "./lib/db.js";

const app = express();

const PORT = process.env.PORT; 
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({origin: process.env.FRONTEND_URL}));
app.use(clerkMiddleware());

app.get("/health", async (req,res) =>{
    res.status(200).json({okay :true}); 
});

app.listen(PORT,() =>{
    connectDB();
     console.log("Server is up and running on PORT:", PORT)
});

//1:05;57