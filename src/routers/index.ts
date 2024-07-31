import StudentsRouters from './studentsRouters/index'
import TeacherRouters from './TeacherRouters/index'
import express from 'express'



const router = express.Router()

    router.use("/students",StudentsRouters)
    router.use("/Teacher",TeacherRouters)


export default router