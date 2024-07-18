import StudentsModel from "../../db/models/studentsModel";
import { hashPassword } from "../../services/passwordManagement/passwordManagement";
import { userRegisterInterface } from "../../types/Students/AuthInterface";
import { RegisterMailStudents } from "../../utils/registerMailStudents";
import generateOTP from '../../utils/generateOTP'


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