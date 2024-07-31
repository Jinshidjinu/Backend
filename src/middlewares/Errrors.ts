
import {  Response } from "express";


const SendErrorResponse =(
    res:Response,
    status: number | undefined,
    err:Error
) =>{
   return res.status(status? status : 500).json({
    error:err.message
    ?err.message : err
    ?err : "something went wrong , try again",
   }) 
}

export default SendErrorResponse