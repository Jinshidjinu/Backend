import StudentsModel from "../../db/models/studentsModel";
import { hashPassword , comparePassword } from "../../services/passwordManagement/passwordManagement";
import { userRegisterInterface,StudentsLoginInterface } from "../../types/Students/AuthInterface";
import { RegisterMailStudents } from "../../utils/registerMailStudents";
import generateOTP from '../../utils/generateOTP'
import tembstorage from '../../utils/tembstorage'
import {createAccessToken,createRefreshToken}  from '../../Constants/JwtConfig/jwtConfig'


export const StudentsAuthHelpers = ()=>{
    
    const studentsLoginHelper = async (details: StudentsLoginInterface) => {
        try {
            const { email, password } = details;
            const Student = await StudentsModel.findOne({ email });
            if (!Student) {
                throw new Error("Student not found");
            }
            if (Student.isDeleted) {
                throw new Error("Student is deleted");
            }
            const isMatchedPassword = await comparePassword(password, Student.password);
            if (!isMatchedPassword) {
                throw new Error("Invalid credentials");
            }
            if (!Student.verified) {
                throw new Error("Student is not verified");
            }
            return Student            
        } catch (error) {
            console.error("studentsLoginHelper error:", error);  
            throw error;
         }
        };

    
    const studentRegisterHelper = async (details : userRegisterInterface)=>{
        try {
            const existStudents = await StudentsModel.findOne({email: details.email})
            if(existStudents){
                throw new Error("email already exist")
            }

            const hashedPassword = await hashPassword(details.password)
            details.password = hashedPassword
            
            const otp = generateOTP()
            RegisterMailStudents(details.email, details.name, Number(otp))

               // Store OTP temporarily
               tembstorage.set(details.email, otp);
            
            const create = await StudentsModel.create(details)
            return create
            
        } catch (error) {
            throw error
        }
    }



    return {
        studentRegisterHelper,
        studentsLoginHelper
    }
}