import { Request , Response } from "express"
import { AdminTotalHelper } from "../../helpers/Admin/AdminTotalHelper"
import SendErrorResponse from "../../middlewares/Errrors"


const {
    subjectVideoHelper,
    getVideosdataHelper,
    videoDeleteHelper,
    getVideoByIdHelper,
    EditVideosHelper,


} = AdminTotalHelper()

export const AdminTotalController =  () =>{

    const subjectVideo = async (req:Request , res:Response) =>{
        try {
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
    

    const getVideosDetails = async (req:Request , res:Response) =>{
        try {
            const Videodetails = await getVideosdataHelper()
            res.json(Videodetails)
        } catch (error:any) {
            SendErrorResponse(res , 500, error)
        }
    }

    const getVideoById  = async (req:Request, res:Response)=>{
        try {
            const {id} = req.params;            
            const videoshow = await getVideoByIdHelper(id)            
            res.json(videoshow);
        } catch (error:any) {
            SendErrorResponse(res , 500, error)
        }
    }

    const EditVideos = async (req:Request , res:Response) =>{
         try {
            const {id} = req.params; 
            const updateData = {
                title: req.body.title,
                description: req.body.description,
                videoPath: req.file?.path, // If the video file was changed
            }
            const result = await EditVideosHelper(id,updateData)
            
            
         } catch (error) {
            
         }
    }



    const videoDelete = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const UpdatedVideos = await videoDeleteHelper(id)
            
            if (UpdatedVideos) {
                res.status(200).json({message:"video marked as deleted successfully"})
            }else{
              return  SendErrorResponse(res, 400, new Error("video not found"));
            }
           } catch (error:any) {
            SendErrorResponse(res, 500, error);
           }
       
    }

    return {
        subjectVideo,
        getVideosDetails,
        videoDelete,
        EditVideos,
        getVideoById
    }

}



