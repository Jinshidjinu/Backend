import { sendEmail } from "./nodmailer";
import dotenv from "dotenv"
dotenv.config()

export const RegisterMailStudents = (email: string, name: string, otp:number  ) => {
    try {
        sendEmail(
            email,
           
        `Welcome to Eduzone!`,
  
        ` <div style="width: 100%; background-color: #f0f0f0; font-family: sans-serif; padding: 20px; box-sizing: border-box;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
         <div style="text-align: center; margin-bottom: 20px;">
            <img src='https://i.imgur.com/favicon.ico' alt="profile Logo" style="max-width: 150px;">
        </div>
        <h1 style=" margin: 0 auto; text-align: center;">Succefully Signup Request</h1>
        <p style="color: #666;">Hello, ${name}</p>
        <p style="color: #666;">We are happy to know your interest in choosing the best path for your professional career. We are obliged to keep you aware of the complete details of the course. Know more about us on social.:</p>
        <div style="margin: 20px 0; padding: 10px 20px; color: #007BFF; background-color: #f7f7f7; border: 1px solid #007BFF; display: inline-block; border-radius: 5px; font-size: 24px; text-align: center;">
            <strong>${otp}</strong>
        </div>
        <p style="color: #666;">If you have any doubts, feel free to call us on 9529291138</p>
        <div style="width:35%; background-color: #f0f0f0; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); color:black ;">
         India Is Best Online Platform
        </div>
        <p style="color: #666;">Wishing you a great success ahead..</p>
        <p style="color: #666;">Thank you, <br>Eduzone.com</p>
    </div>
     </div>   `
        
      );
    } catch (error) {
      throw error;
    }
  };
  

