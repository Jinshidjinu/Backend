import { sign, verify } from 'jsonwebtoken'

export const createAccessToken = async  (_id: string)=>{
    try {
        return  sign({_id}, process.env.JWT_SECRET as string, { expiresIn : "10s"})
    } catch (error) {
        throw error
    }
}  

export const createRefreshToken = async (_id: string)=>{
    try {
        return  sign({_id}, process.env.JWT_SECRET as string, { expiresIn : "10m"})
    } catch (error) {
        throw error
    }
}

export const verifyToken = async (token: string)=>{
    try {
        return   verify(token, process.env.JWT_SECRET as string)
    } catch (error) {
        throw error
    }
}

export const createNewAccessToken = async (_id:string)=>{
    try {
        return  sign(
            {_id},process.env.JWT_SECRET as  string,
            {expiresIn:"10s"}
        )
    } catch (error) {
        throw error
    }
}