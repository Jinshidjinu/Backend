
import { Document, Types } from "mongoose";

 export interface AdminLoginInterface {
    email: string | undefined;
    password: string | undefined;
}


export interface SubjectVideosInterface {
    title : string;
    description : string,
    videoPath:string,
}


// Define the type for the updated video data
export interface UpdatedVideoDataInterface {
    title?: string;
    description?: string;
    videoPath?: string;
}

// Define the type for the return value of the helper function (optional)
export interface EditVideosHelperResultInterface extends Document {
    _id: Types.ObjectId;
    title: string;
    description: string;
    videoPath: string;
    // other fields as necessary
}