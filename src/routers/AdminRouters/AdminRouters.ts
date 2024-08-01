import express, { Router } from 'express'
import { AdminController } from '../../controllers/Admin/AdminAuthController'





const {
    AdminLogin
 } = AdminController();

const router = express.Router();
router.post('/Adminlogin', AdminLogin);

export default router;