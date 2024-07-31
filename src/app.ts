
import express  from "express";
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import allRouters from './routers'
import cookieParser from "cookie-parser";
dotenv.config()

const app = express()
app.use(cookieParser());
const corsOption = {
    origin:[
       "http://localhost:7860"
    ],
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    credentials: true,
}

app.use(cors(corsOption))
app.use(express.json())
app.use(morgan("dev"))
app.use("/public", express.static("public"));


app.use("/api/v1",allRouters );

export default app