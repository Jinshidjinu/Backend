import express, { Router } from 'express'
import { AdminController } from '../../controllers/Admin/AdminAuthController'
import { AdminStudentsController } from '../../controllers/Admin/students/AdminStudentsContrller';


const {
    AdminLogin,

    
 } = AdminController();

 const {
    getAllStudentsData,
    StudentBlockandUnblock,
    StudentDelete
 } = AdminStudentsController()

const router = express.Router();
router.post('/Adminlogin', AdminLogin);
router.get('/userdetails',getAllStudentsData)
router.post('/studentsBlock/:id',StudentBlockandUnblock)
router.post('/studentDelete/:id',StudentDelete)

export default router;