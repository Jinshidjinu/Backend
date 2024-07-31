import  {Request,Response} from 'express'
import SendErrorResponse from "../../middlewares/Errrors";
import { studentRegisterSchema , studentLoginSchema} from '../../lib/validations/students/studentsAuthValidations';
import { StudentsAuthHelpers,  } from '../../helpers/students/AuthHelper';
import tembstorage from '../../utils/tembstorage';
import StudentsModel from '../../db/models/studentsModel';
import {createAccessToken,
        createRefreshToken,
        verifyToken,
        createNewAccessToken
    }  from '../../Constants/JwtConfig/jwtConfig'
import { CustomRequest } from '../../types/cutomRequestType';
import { isValidObjectId } from 'mongoose';


const {
studentRegisterHelper,
studentsLoginHelper,
findStudentWithId
} = StudentsAuthHelpers()

export const StudentsController = ()=>{
        const studentLogin = async (req: Request, res: Response) => { 
         try {
            const { error, value } = studentLoginSchema.validate(req.body);
            console.log("Validation error:", error);
            if (error) return SendErrorResponse(res, 400, error);
            const {email,password} = req.body;
            const response = await studentsLoginHelper({email,password});
            const studentId = response._id.toString();
            const accessToken  = await createAccessToken(studentId);
            const refreshToken = await createRefreshToken(studentId);
            
            res.cookie("studentToken", refreshToken, {
                httpOnly: false,
                sameSite: "none",
                secure: true,
            });
            res.status(200).json({
                message:"Login Successfully",
                response,
                accessToken
            });
        } catch (error: any) {
            console.error("Login Error: ", error);  
            SendErrorResponse(res, 500, error);
        }
    };


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
        if (StoredOtp === otpString) {
        tembstorage.deleteOtp(email)
        user.verified = true
        await user.save()
        res.status(200).json({message:"OTP verified successfully"})
       }else{
        return SendErrorResponse(res, 400, new Error("OTP does not match"));
       }    
        }catch (error:any) {
            console.log(error);
            SendErrorResponse(res, 500,error ); 
        }
     } 
    
    
     const studentToken = async (req: Request, res: Response) => {
        try {
            const refreshToken = req.cookies?.studentToken;
            const response :any = await verifyToken(refreshToken)
            const accessToken : any =await createNewAccessToken(response?._id)
            res.status(200).json({ refreshToken: accessToken });
        } catch (error:any) {
            SendErrorResponse(res, 500,error ); 
        }
    };

    const studentSingle = async (req: CustomRequest, res: Response)=>{
        try {
            const userId = req.student?._id as string
            if(!isValidObjectId(userId)){
                return SendErrorResponse(res, 400, new Error("invalid user id"))
            }
            const user = await findStudentWithId(userId)
            res.status(200).json(user)
      } catch (error : any) {
          SendErrorResponse(res, 500,error)  
        }
    }
    

    return {
        studentSignup,
        StudentOtpVerify,
        studentLogin,
        studentToken,
        studentSingle
    };
}  