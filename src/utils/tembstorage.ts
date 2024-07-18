const tempOtpStorage = new Map();

module.exports = {
    set: (email:string, otp:string) => {
        tempOtpStorage.set(email, otp);
        setTimeout(() => {
            tempOtpStorage.delete(email);
        }, 300000); // OTP expires in 5 minutes
    },
    get: (email:string) => {
        return tempOtpStorage.get(email);
    },
    delete: (email:string) => {
        tempOtpStorage.delete(email);
    }
};
