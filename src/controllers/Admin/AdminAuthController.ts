import dotenv from 'dotenv'
dotenv.config()
import { Request,Response } from "express"
import SendErrorResponse from '../../middlewares/Errrors'
import { error } from 'console';


interface AdminCredentials {
    email: string | undefined;
    password: string | undefined;
}

const Admin: AdminCredentials = {
    email: process.env.Admin_Email?.trim().replace(/,+$/, ''),
    password: process.env.Admin_Password?.trim()
};

export const AdminController = () => {
    const AdminLogin = async (req: Request, res: Response): Promise<void> => {
        try {
            const AdminData: AdminCredentials = req.body;
            console.log('Admin login data:', AdminData);
            console.log('Stored Admin credentials:', Admin);
            if ( AdminData.email?.trim() === Admin.email && AdminData.password === Admin.password) {
                console.log("Credentials match. Login successful.");
                res.status(200).json({ success: true })
            } else {
                console.log("Invalid credentials.")
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