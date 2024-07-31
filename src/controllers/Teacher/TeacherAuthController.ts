import TeacherModel from "../../db/models/TeachersModel" 
import { TeacherAuthHelper } from "../../helpers/Teachers/TeacherAuthHelper"
import {Request,Response} from 'express' 
import { TeacherRegisterValidation } from "../../lib/validations/Teachers/TeacherAuthValid"
import SendErrorResponse from "../../middlewares/Errrors"

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

   }

   return {
       TeachersSignup,
       TeacherOtpVerify,
       
   };
};