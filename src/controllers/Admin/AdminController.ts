import { Request , Response } from "express"
import { AdminTotalHelper } from "../../helpers/Admin/AdminTotalHelper"
import SendErrorResponse from "../../middlewares/Errrors"

const {
    subjectVideoHelper,

} = AdminTotalHelper()

export const AdminTotalController =  () =>{

    const subjectVideo = async (req:Request , res:Response) =>{
        try {
            console.log('Received request body:', req.body);
            console.log('Received file:', req.file);
    
            const { title, description } = req.body;
            const videoPath = req.file?.path;

        if (!title || !description || !videoPath) {
            return res.status(400).json({ error: "Title, description, and video file are required" });
        }
        
        const result = await subjectVideoHelper({title,description,videoPath})
        res.status(201).json({ message: "Video saved successfully", data: result });
          
        } catch (error:any) {
            SendErrorResponse(res, 500, error);
        }
    }



    return {
        subjectVideo,
    }

}



