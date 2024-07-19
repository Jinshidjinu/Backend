import StudentsModel from "../../db/models/studentsModel";
import { hashPassword } from "../../services/passwordManagement/passwordManagement";
import { userRegisterInterface } from "../../types/Students/AuthInterface";
import { RegisterMailStudents } from "../../utils/registerMailStudents";
import generateOTP from '../../utils/generateOTP'
import tembstorage from '../../utils/tembstorage'


export const StudentsAuthHelpers = ()=>{
    
    const studentRegisterHelper = async (details : userRegisterInterface)=>{
        try {
            const existStudents = await StudentsModel.findOne({email: details.email})
            if(existStudents){
                throw new Error("email already exist")
            }

            const hashedPassword = await hashPassword(details.password)
            details.password = hashedPassword
            
            const otp = generateOTP()
            console.log(otp,'otpppp');
            RegisterMailStudents(details.email, details.name, Number(otp))

               // Store OTP temporarily
               tembstorage.set(details.email, otp);
               console.log(otp, "otp");
               console.log(tembstorage, 'tempstorage');
        
            const create = await StudentsModel.create(details)
            return create

        } catch (error) {
            throw error
        }
    }


  

    return {
        studentRegisterHelper
    }
}