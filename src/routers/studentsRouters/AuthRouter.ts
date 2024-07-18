import express from "express"
import { StudentsController } from "../../controllers/Student/AuthController"

const {

    studentSignup,

} = StudentsController()

const router = express.Router()


router.post("/register",studentSignup)


export default router;