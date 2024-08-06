import express, { Router } from 'express'
import { AdminController } from '../../controllers/Admin/AdminAuthController'
import { AdminTotalController } from '../../controllers/Admin/AdminController';
import { AdminStudentsController } from '../../controllers/Admin/students/AdminStudentsContrller';
import videosmulter from '../../utils/multer/multer'



const {
    AdminLogin,  
 } = AdminController();

 const {
   subjectVideo
 } = AdminTotalController()

 const {
    getAllStudentsData,
    StudentBlockandUnblock,
    StudentDelete,
   
 } = AdminStudentsController()

const router = express.Router();
router.post('/Adminlogin', AdminLogin);
router.get('/userdetails',getAllStudentsData)
router.post('/studentsBlock/:id',StudentBlockandUnblock)
router.post('/studentDelete/:id',StudentDelete)
router.post('/addvideos',videosmulter.single('video'),subjectVideo)


export default router