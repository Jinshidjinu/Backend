import mongoose from 'mongoose'
import {Mydbconnetion} from '../types/DBconnection/dbConnection'

const dbOptions : Mydbconnetion ={}

export const DataBaseConnection = () =>{
    const databaseUrl = process.env.DATABASE_URL || "";
    mongoose.connect(databaseUrl,dbOptions).then(()=>{
        console.log(" Database Connected ");
    }).catch((err)=>{
        console.log(`database error:${err}`);
    })
}
