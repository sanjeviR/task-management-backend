import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

export const sendActivationMail = async (
  email: string,
  name: string,
  token: string,
): Promise<void> => {
  const activationLink = `http://localhost:5173/activate-account?token=${token}`;
  const templatePath = path.join(__dirname,'../views/account-activation.html');
  let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
  htmlTemplate = htmlTemplate.replace(/{{NAME}}/g, name);
  htmlTemplate = htmlTemplate.replace(/{{ACTIVATION_LINK}}/g,activationLink);

  const mailOptions = {
    from: '"Task Manager Support" <no-reply@taskmanager.com>',
    to: email,
    subject: "Activate Your Account",
    html: htmlTemplate
  };
  await transporter.sendMail(mailOptions);
};
