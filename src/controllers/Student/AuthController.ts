import express, {Request,Response} from 'express'

import SendErrorResponse from "../../middlewares/Errrors";
import { studentRegisterSchema } from '../../lib/validations/students/studentsAuthValidations';
import { StudentsAuthHelpers } from '../../helpers/students/AuthHelper';


const {
studentRegisterHelper
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
    return {
        studentSignup,
    };





}




