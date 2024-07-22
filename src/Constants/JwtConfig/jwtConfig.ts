import { sign, verify } from 'jsonwebtoken'

export const createAccessToken = async  (_id: string)=>{
    try {
        return  sign({_id}, process.env.JWT_SECRET as string, { expiresIn : "1d"})
    } catch (error) {
        throw error
    }
}  

export const createRefreshToken = async (_id: string)=>{
    try {
        return  sign({_id}, process.env.JWT_SECRET as string, { expiresIn : "3d"})
    } catch (error) {
        throw error
    }
}

export const verifyToken = (token: string)=>{
    try {
        return  verify(token, process.env.JWT_SECRET as string)
    } catch (error) {
        throw error
    }
}