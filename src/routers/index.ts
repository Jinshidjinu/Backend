import StudentsRouters from './studentsRouters/index'
import TeacherRouters from './TeacherRouters/index'
import AdminRouters from './AdminRouters/index'
import express from 'express'



const router = express.Router()

    router.use("/students",StudentsRouters)
    router.use("/Teachers",TeacherRouters)
    router.use("/admin",AdminRouters)


export default router