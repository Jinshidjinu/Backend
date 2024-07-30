import StudentsRouters from './studentsRouters/index'
import express from 'express'



const router = express.Router()

    router.use("/students",StudentsRouters)

export default router