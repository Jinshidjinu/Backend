import subVideoModel from "../../db/models/Admin/subVideoModel"
import { SubjectVideosInterface } from "../../types/Admin/AdminInterface"



export const AdminTotalHelper =  () =>{

    const subjectVideoHelper = async (data:SubjectVideosInterface)=>{
        try {
          const newVideo = new subVideoModel({
            title: data.title,
            description: data.description,
            videoPath: data.videoPath
          })
          const savedVideo = await newVideo.save();
          return savedVideo;
        } catch (error:any) {
           throw error
        }
    }

    const getVideosdataHelper = async ()=>{
           try {
            const videosdetails = await subVideoModel.find({isDeleted:false})
            return videosdetails;
           } catch (error:any) {
            throw error
           }



    }
   return {
    subjectVideoHelper,
    getVideosdataHelper

   }

}