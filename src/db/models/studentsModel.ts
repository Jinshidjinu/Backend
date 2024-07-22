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
            required:true,
            enum:["high_school","bachelors" ]
        },
        verified: {
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

StudentSchema.methods.toJSON = function (){
    const student = this
    const studentObj = student.toObject()
    delete studentObj.password
    return studentObj
}

const StudentsModel = mongoose.model("students",StudentSchema)
export default StudentsModel