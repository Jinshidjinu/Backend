import { sendEmail } from "./nodmailer";

export const RegisterMailStudents = (email: string, name: string, otp:number  ) => {
    try {
        sendEmail(
            email,
           
        `Welcome to Eduzone!`,
  
        `             <div style="width: 100%; background-color: #f0f0f0; font-family: sans-serif; padding: 20px; box-sizing: border-box;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="YOUR_LOGO_URL_HERE" alt="Company Logo" style="max-width: 150px;">
        </div>
        <h1 style="color: #333;">Password Reset Request</h1>
        <p style="color: #666;">Hello, ${name}</p>
        <p style="color: #666;">We received a request to reset your password. Please use the following OTP to reset your password:</p>
        <div style="margin: 20px 0; padding: 10px 20px; color: #007BFF; background-color: #f7f7f7; border: 1px solid #007BFF; display: inline-block; border-radius: 5px; font-size: 24px; text-align: center;">
            <strong>${otp}</strong>
        </div>
        <p style="color: #666;">Alternatively, you can click the button below to reset your password:</p>
        <a href="YOUR_RESET_LINK_HERE" style="display: inline-block; margin: 20px 0; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p style="color: #666;">If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
        <p style="color: #666;">Thank you, <br>Speranza.com</p>
    </div>
</div>
          `
      );
    } catch (error) {
      throw error;
    }
  };
  

