import mongoose  from "mongoose"

const StudentSchema = new mongoose.Schema({
    
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
            required:true
        }

       
})

const StudentsModel = mongoose.model("students",StudentSchema)

export default StudentsModel