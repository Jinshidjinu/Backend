
import { required, string } from "joi";
import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
     },
     email:{
         type:String,
         required:true
     },
     password:{
         type:String,
         required:true
     },
     phone:{
         type:String,
         required:true
     },
     qualification:{
        type:String,
        required:true,
        enum:["CMA","bachelors and CMA","Masters and CMA" ]
     },
     subject:{
        type:String,
        required:true
     },
     isActive:{
        type: Boolean,
        default: false,
        required: true
     },
     status: {
        type: String,
        requred: true,
        enum: ["pending", "approved", "cancel"],
      },
     verified:{
        type: Boolean,
        default: false,
        required: true
     },
    isDeleted: {
        type: Boolean,
        default: false,
        required: true,
      },

},{ timestamps: true });



const TeacherModel = mongoose.model("Teachers",TeacherSchema)
export default TeacherModel
