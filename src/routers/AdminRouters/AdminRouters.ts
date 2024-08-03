import express, { Router } from 'express'
import { AdminController } from '../../controllers/Admin/AdminAuthController'
import { AdminStudentsController } from '../../controllers/Admin/students/AdminStudentsContrller';


const {
    AdminLogin,
    
 } = AdminController();

 const {
    getAllStudentsData,
 } = AdminStudentsController()

const router = express.Router();
router.post('/Adminlogin', AdminLogin);
router.get('/userdetails',getAllStudentsData)

export default router;