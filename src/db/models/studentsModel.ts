import mongoose  from "mongoose"
import validator from "validator";
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
        phone: { 
            type: String,
            unique: true,
            validator: [
                {
                    validator: function(value: string ) {
                        return /^\d{10}$/.test(value)
                    },
                    message: "Invalid Number" 
                }
            ]
        },
        subject:{
            type:String,
            required:true
         },
        qualification:{
            type:String,
            required:true,
            enum:["high_school","bachelors" ]
        },
        status: {
            type: String,
            required: true,
            enum: ["pending", "approved", "cancel", "blocked", "unblocked"],
            default: "unblocked",
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