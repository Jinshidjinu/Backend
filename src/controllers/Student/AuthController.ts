import express, {Request,Response} from 'express'

import SendErrorResponse from "../../middlewares/Errrors";



export const StudentsController = ()=>{

    const studentSignup = (req:Request , res:Response) =>{

        try {

            const {name,email,password,confirmpassword,phone,qualification} = req.body
            console.log("jinu",req.body);
            
            
        } catch (error) {
            console.log(error);
            
        }

        
    }
    return {
        studentSignup,
    };





}




