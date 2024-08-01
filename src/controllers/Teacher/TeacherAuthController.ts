import TeacherModel from "../../db/models/TeachersModel" 
import { TeacherAuthHelper } from "../../helpers/Teachers/TeacherAuthHelper"
import {Request,Response} from 'express' 
import { TeacherRegisterValidation } from "../../lib/validations/Teachers/TeacherAuthValid"
import SendErrorResponse from "../../middlewares/Errrors"
import tembstorage from "../../utils/tembstorage"
const {
   TeacherSignupHelper
} = TeacherAuthHelper()


export const TeacherController = () => {
   const TeachersSignup = async (req: Request, res: Response) => {
       try {
           const { error, value } = TeacherRegisterValidation.validate(req.body);
           if (error) return SendErrorResponse(res, 400, error);
           const response = await TeacherSignupHelper(value);
           console.log(response);
           res.status(200).json({ message: 'Signup Successful', data: response });
       } catch (error:any) { 
           SendErrorResponse(res, 500, error);
       }
   };


   const TeacherOtpVerify = async (req:Request,res:Response)=>{
     try {
     const {email,otpString} = req.body
     const Teacher = await TeacherModel.findOne({email})
     if (!Teacher) {
     return SendErrorResponse(res,400, new Error("Teacher not found"))     
     }
     const StoredOtp =  tembstorage.get(email)
        if (StoredOtp === otpString) {
        tembstorage.deleteOtp(email)
        Teacher.verified = true
        await Teacher.save()
        res.status(200).json({message:"OTP verified successfully"})
       }else{
        return SendErrorResponse(res, 400, new Error("OTP does not match"));
       }   
     
     } catch (error:any) {
      SendErrorResponse(res, 500,error ); 
     }
   }

   return {
       TeachersSignup,
       TeacherOtpVerify,

   };
};