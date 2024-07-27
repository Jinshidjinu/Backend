import express from "express"
import { StudentsController } from "../../controllers/Student/AuthController"
import studentAuth from '../../middlewares/StudentMiddleware'
   

const {
    studentSignup,
    StudentOtpVerify,
    studentLogin,
    studentToken,
} = StudentsController()

const router = express.Router()


router.post("/login",studentLogin)
router.post("/register",studentSignup)
router.post("/verifyOtp",StudentOtpVerify)
router.get("/StudentToken",studentToken)


export default router;