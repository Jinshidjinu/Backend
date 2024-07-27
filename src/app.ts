
import express  from "express";
import { Request, Response, NextFunction } from 'express';
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import allRouters from './routers'
import cookieParser from "cookie-parser";
dotenv.config()

const app = express()

app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/public", express.static("public"));


app.use("/api/v1",allRouters );

export default app