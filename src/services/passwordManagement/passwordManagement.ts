import bcrypt from 'bcrypt'

export const hashPassword = async (password: string)=>{
    return await bcrypt.hash(password, 8)
}

export const comparePassword = async (newPassword: string, oldPassword: string)=>{
    return await bcrypt.compare(newPassword, oldPassword)
}