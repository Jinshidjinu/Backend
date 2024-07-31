import jwt from 'jsonwebtoken'
import SendErrorResponse from './Errrors'
import { NextFunction , Response } from "express";
import StudentsModel from '../db/models/studentsModel';
import { CustomRequest } from '../types/cutomRequestType';
import   {verifyToken}     from '../Constants/JwtConfig/jwtConfig'

const studentAuth = async (req:CustomRequest, res:Response, next:NextFunction)=>{
    try {
        const accessToken = req.headers.authorization?.split(" ")[1];
        if (accessToken) {
            const decoded:any = await verifyToken(accessToken)                   
           const id:string = decoded._id;
           const student = await StudentsModel.findOne({_id:id})
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