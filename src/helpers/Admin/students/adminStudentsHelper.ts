import StudentsModel from "../../../db/models/studentsModel"



export const adminStudentsHelpers =  () => {

    const getAllStudentsDataHelper = async () => { 
        try {
            const studentsDatas = await StudentsModel.find({isDeleted:false});
            return studentsDatas;
        } catch (error) {
            throw error;
        }
    };
    
    


    return {
        getAllStudentsDataHelper,
    };
};