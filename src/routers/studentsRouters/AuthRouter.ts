import express from "express"
import { StudentsController } from "../../controllers/Student/AuthController"



const {
    studentSignup,
    StudentOtpVerify,
} = StudentsController()

const router = express.Router()


router.post("/register",studentSignup)
router.post("/verifyOtp",StudentOtpVerify)


export default router;