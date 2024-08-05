import StudentsModel from "../../../db/models/studentsModel"


export const adminStudentsHelpers =  () => {

    const getAllStudentsDataHelper = async () => { 
        try {
            const studentsDatas = await StudentsModel.find({isDeleted:false});
            return studentsDatas;
        } catch (error:any) {
            throw error;
        }
    };
    
    const StudentBlockandUnblockHelpr = async (data:string) =>{
        try {
            const student = await StudentsModel.findById(data)
            if (!student) {
                throw new Error("Student not found");
            }
            student.status = student.status === "blocked" ? "unblocked" : "blocked"
            await student.save()
            return student
        } catch (error:any) {
            throw error;
        }
      }   

        const StudentDeleteHelper = async (id:string) =>{
            try {
              const updateStudent = await StudentsModel.findByIdAndUpdate(
                 id,
                 {isDeleted:true},
                 {new:true}
              )
              return updateStudent  
            } catch (error:any) {
                throw error
                
            }


        }



    return {
        getAllStudentsDataHelper,
        StudentBlockandUnblockHelpr,
        StudentDeleteHelper,
    };
};