import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const Email = process.env.Hidemyemail;
const password = process.env.HideMypassword;
//  const SMTP  = process.env.SMTP_NET

export const sendEmail = async (
  email: string,
  subject: string,
  text: string
) => {

    try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true,
          port:465,
          auth: {
            user: Email,
            pass: password,
          },
          tls: {
            // Enable if you encounter issues with the server's SSL/TLS certificate
            rejectUnauthorized: false,
          },
        });
    
        await transporter.sendMail({
          from:Email,
          to: email,
          subject: `${subject}`,
          html: text,
        });
    
        console.log("email has been sent");
      } catch (error) {
        console.log(error);
        console.log("email not sent");
      }
    };
    