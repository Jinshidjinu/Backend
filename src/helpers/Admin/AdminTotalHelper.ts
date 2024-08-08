import subVideoModel from "../../db/models/Admin/subVideoModel"
import { SubjectVideosInterface,UpdatedVideoDataInterface,EditVideosHelperResultInterface } from "../../types/Admin/AdminInterface"



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


    const getVideoByIdHelper = async (id:string) =>{
      try {
        const videofind = await subVideoModel.findById(id)
        return videofind;
      } catch (error) {
        throw error
      }
    }

   const EditVideosHelper = async (id:string , updateData:UpdatedVideoDataInterface) =>{
        try {
          const updatedVideo = await subVideoModel.findByIdAndUpdate(
            id,
            {
              $set : updateData,
            },
            {new:true}
          )

         if (!updatedVideo) {
          throw new Error("Video not found");
         }

        return updatedVideo;
              
        } catch (error:any) {
          throw error
        }
   }


    const videoDeleteHelper = async (id:string)=>{
      try {
        const updated = await subVideoModel.findByIdAndUpdate(
          id,
          {isDeleted:true},
          {new:true}
        )
        return updated;
        
      } catch (error:any) {
        throw error
      }
    }


   return {
    subjectVideoHelper,
    getVideosdataHelper,
    videoDeleteHelper,
    EditVideosHelper,
    getVideoByIdHelper

   }

}