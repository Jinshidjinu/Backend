import otpGenerator from 'otp-generator'

const generateOTP = ()=>{
    const otp = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
    return otp.toString();
}

export default  generateOTP;