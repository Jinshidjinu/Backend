import { exist } from "joi"
import TeacherModel from "../../db/models/TeachersModel"
import { TeacherRegisterInterface } from "../../types/Teachers/AuthInterface"
import { hashPassword,comparePassword } from "../../services/passwordManagement/passwordManagement"

export const TeacherAuthHelper = ()=>{

   const TeacherSignupHelper = async (details: TeacherRegisterInterface) => {
      try {
          const existTeacher = await TeacherModel.findOne({ email: details.email });

          if (existTeacher) {
              throw new Error("Email Already Exists");
          }

          const hashedPassword = await hashPassword(details.password);
          details.password = hashedPassword;

          const create = await TeacherModel.create(details)
          return create

      } catch (error) {
          throw error;
      }
  };

  return {
      TeacherSignupHelper,
  };
}