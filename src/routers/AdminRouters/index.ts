import express from 'express'
import AdminRouter from '../../routers/AdminRouters/AdminRouters'


const router = express.Router()

router.use('/auth',AdminRouter)

export default router