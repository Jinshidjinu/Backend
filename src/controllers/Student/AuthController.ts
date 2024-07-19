import express, {Request,Response} from 'express'

import SendErrorResponse from "../../middlewares/Errrors";
import { studentRegisterSchema } from '../../lib/validations/students/studentsAuthValidations';
import { StudentsAuthHelpers } from '../../helpers/students/AuthHelper';
import tembstorage from '../../utils/tembstorage';
import StudentsModel from '../../db/models/studentsModel';
import { error } from 'console';

const {
studentRegisterHelper,

} = StudentsAuthHelpers()

export const StudentsController = ()=>{

    const studentSignup = async (req:Request , res:Response) =>{
        try {
            const {error, value} = studentRegisterSchema.validate(req.body)
            if(error)return  SendErrorResponse(res, 400, error)
                const response = await studentRegisterHelper(req.body)
                res.status(200).json(response)
        } catch (error : any) {
            SendErrorResponse(res, 500, error)
        }
    }

    const StudentOtpVerify = async (req:Request,res:Response)=>{
        try {
        const {email,otpString} = req.body 
      const user = await StudentsModel.findOne({email})
      if(!user){
        return SendErrorResponse(res, 400, new Error("User not found"));
      }
       const StoredOtp =  tembstorage.get(email)
       console.log(StoredOtp ,'storedotp');
       if (StoredOtp === otpString) {
        tembstorage.deleteOtp(email)
        user.verified = true
        await user.save()
        res.status(200).json({message:"OTP verified successfully"})
       }else{
        return SendErrorResponse(res, 400, new Error("OTP does not match"));
       }    
        } catch (error:any) {
            console.log(error);
            SendErrorResponse(res, 500,error ); 
        }

    } 
    return {
        studentSignup,
        StudentOtpVerify,
    };
}




