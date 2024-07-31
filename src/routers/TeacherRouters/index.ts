import express from 'express'
import TeacherAuthRouter from './TeacherAuthRouter'


const router = express.Router()

router.use('/auth',TeacherAuthRouter)

export default router