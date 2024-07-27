import jwt from 'jsonwebtoken'
import SendErrorResponse from './Errrors'
import { NextFunction , Response } from "express";
import StudentsModel from '../db/models/studentsModel';
import { CustomRequest } from '../types/cutomRequestType';

const studentAuth = async (req:CustomRequest, res:Response, next:NextFunction)=>{
    try {
        const accessToken = req.headers.authorization?.split(" ")[1];
        console.log(accessToken, "token");
        
        if (accessToken) {
            const decoded:any = jwt.verify(
                accessToken,
                process.env.JWT_SECRET as string
            )


           const id: string = decoded._id;
           console.log(id,'id');
           
           const student = await StudentsModel.findOne({_id:id})
           console.log(student, 'stu');
           

           if (!student) {
            const err = new Error('Invalid token');
            return SendErrorResponse(res, 401, err);            
           }
            // Attach the user to the request object
            req.student = student;
             // Proceed to the next middleware or route handler
             next();
        } else{
            const err = new Error('Authorization header is missing');
            SendErrorResponse(res, 401, err);
        }

    } catch (error) {
       console.log(error);
        return SendErrorResponse(res, 403, error as any);
    }

}

export default studentAuth