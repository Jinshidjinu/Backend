import { ObjectId } from "mongoose";

export interface StudentsLoginInterface {
    email : string,
    password: string,
    
}

export interface userRegisterInterface {
name: string
email: string;
phone: string;
password: string
qualification: string
subject:string
}
