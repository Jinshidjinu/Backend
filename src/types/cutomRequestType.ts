import { Document } from "mongoose";
import {Request} from 'express'


export interface CustomRequest extends Request {
    student?: Document | null
    admin?: Document | null
}