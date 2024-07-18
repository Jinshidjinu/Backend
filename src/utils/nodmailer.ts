import nodemailer from "nodemailer";
const Email = process.env.Hidemyemail;
const password = process.env.HideMypassword;
 const SMTP  = process.env.SMTP_NET
 


export const sendEmail = async (
  email: string,
  subject: string,
  text: string
) => {

    try {
        const transporter = nodemailer.createTransport({
          host: SMTP,
          secure: true,
          auth: {
            user: Email,
            pass: password,
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
    