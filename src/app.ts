
import express  from "express";
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import studentsRouter from './routers/studentsRouters/AuthRouter'
dotenv.config()


// STUDENT ROUTE EXTRACTES


const app = express()

const corsOption ={
    origin:[
        "http://localhost:7860",
    ],
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    credentials:true
}

app.use(cors(corsOption))
app.use(express.json())
app.use(morgan("dev"))
app.use("/public", express.static("public"));



app.use("/api",studentsRouter );

export default app