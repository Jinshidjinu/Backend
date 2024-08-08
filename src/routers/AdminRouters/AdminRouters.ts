import express, { Router } from 'express'
import { AdminController } from '../../controllers/Admin/AdminAuthController'
import { AdminTotalController } from '../../controllers/Admin/AdminController';
import { AdminStudentsController } from '../../controllers/Admin/students/AdminStudentsContrller';
import videosmulter from '../../utils/multer/multer'



const {
    AdminLogin,  
 } = AdminController();

 const {
   subjectVideo,
   getVideosDetails,
   videoDelete,
   EditVideos,
   getVideoById
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
router.get('/videosdetails',getVideosDetails)
router.post('/videoDelete/:id', videoDelete)
router.post('/editvideos/:id',EditVideos)
router.get('/getvideo/:id',getVideoById)


export default router