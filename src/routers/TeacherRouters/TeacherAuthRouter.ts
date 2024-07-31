import express from 'express'
import { TeacherController } from '../../controllers/Teacher/TeacherAuthController'

const {
  TeachersSignup

} = TeacherController()

const router = express.Router()

router.post('/TeacherSignup',TeachersSignup)
router.post('/TeacherLogin',)


export default router;