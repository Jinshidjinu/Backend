const tempOtpStorage: Map<string, string> = new Map();

const set = (email: string, otp: string): void => {
    tempOtpStorage.set(email, otp);
    setTimeout(() => {
        tempOtpStorage.delete(email);
    }, 300000); // OTP expires in 5 minutes
};

const get = (email: string): string | undefined => {
    return tempOtpStorage.get(email);
};

const deleteOtp = (email: string): void => {
    tempOtpStorage.delete(email);
};

export default { set, get, deleteOtp };