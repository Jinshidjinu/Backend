import dotenv from 'dotenv'
dotenv.config()
import { Request,Response } from "express"
import SendErrorResponse from '../../middlewares/Errrors'
import {AdminLoginInterface} from '../../types/Admin/AdminInterface'


const Admin: AdminLoginInterface = {
    email: process.env.Admin_Email?.trim().replace(/,+$/, ''),
    password: process.env.Admin_Password?.trim()
};

export const AdminController = () => {
    const AdminLogin = async (req: Request, res: Response) => {
        try {
            const AdminData: AdminLoginInterface = req.body;
            if ( AdminData.email?.trim() === Admin.email && AdminData.password === Admin.password) {
                res.status(200).json({ success: true })
            } else {
                SendErrorResponse(res, 400, new Error("Invalid email or password"));
            }
        } catch (error: any) {
            SendErrorResponse(res, 500, error);
        }
    };
    return {
        AdminLogin,
    };
};