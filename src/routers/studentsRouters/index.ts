import studentAuthRoute from './AuthRouter'
import express from 'express'


const router = express.Router()

router.use("/auth", studentAuthRoute)

export default router
