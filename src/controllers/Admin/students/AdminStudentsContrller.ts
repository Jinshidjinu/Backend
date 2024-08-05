import { Request,Response } from "express"
import StudentsModel from "../../../db/models/studentsModel"
import SendErrorResponse from "../../../middlewares/Errrors"
import { adminStudentsHelpers } from "../../../helpers/Admin/students/adminStudentsHelper"

const { getAllStudentsDataHelper,StudentBlockandUnblockHelpr } = adminStudentsHelpers();

export const AdminStudentsController =  () =>{

    const getAllStudentsData = async (req: Request, res: Response) => {
        try {
            const studentsDatas = await getAllStudentsDataHelper();
            res.status(200).json(studentsDatas); 
        } catch (error: any) {
            SendErrorResponse(res, 500, error);
        }
    }
 

    const StudentBlockandUnblock = async(req:Request,res:Response) =>{
        try {
            const { id } = req.params
            const student = await StudentBlockandUnblockHelpr(id)
            res.status(200).json( {message: "Student status updated",student} )
        } catch (error:any) {
            SendErrorResponse(res, 500, error.message);
        }
    }

    
    return {
        getAllStudentsData,
        StudentBlockandUnblock
    };
};