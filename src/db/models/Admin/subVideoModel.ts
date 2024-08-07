import mongoose from "mongoose";
const subVideoClassSchema = new mongoose.Schema({
   
    title : {
      type:String,
      required:true,
      trim:true
    },
    description:{
      type:String,
      required:true,
      trim:true,
    },
    videoPath: {
        type: String,
        required: true,
        trim: true
      },
      isDeleted: {
        type: Boolean,
        default: false,
        required: true,
      },
     
},{timestamps:true})


const subVideoModel = mongoose.model("subVideo",subVideoClassSchema)
export default subVideoModel