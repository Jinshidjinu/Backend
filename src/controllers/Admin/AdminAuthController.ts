import dotenv from 'dotenv'
dotenv.config()
import { Request,Response } from "express"


const Admin = {
    email:process.env.Admin_Email,
    password: process.env.Admin_Password
}



export const AdminController = ()=>{

    const AdminLogin = async( req:Request, res:Response)=>{
          
      
    }

    return {
        AdminLogin,
    }

}







