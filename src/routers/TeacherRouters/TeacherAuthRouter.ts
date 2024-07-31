import express from 'express'
import { TeacherController } from '../../controllers/Teacher/TeacherAuthController'

const {
  TeachersSignup,
  TeacherOtpVerify,


} = TeacherController()

const router = express.Router()

router.post('/TeacherLogin',)
router.post('/TeacherSignup',TeachersSignup)
router.post('/OtpVerify',TeacherOtpVerify)


export default router;