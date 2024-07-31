import TeacherModel from "../../db/models/TeachersModel" 
import { TeacherAuthHelper } from "../../helpers/Teachers/TeacherAuthHelper"
import {Request,Response} from 'express' 


const {
   TeacherSignupHelper
} = TeacherAuthHelper()

export const TeacherController = ()=>{
   
   const  TeachersSignup = async(req:Request,res:Response)=>{
       try {

         
         
    
        } catch (error) {
    
        }
       } 


 return {
    TeachersSignup,
 }

}