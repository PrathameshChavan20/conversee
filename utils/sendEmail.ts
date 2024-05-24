import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const smtpConfig: SMTPTransport.Options = {
  host: process.env.GMAIL_HOST,
  port: Number(process.env.GMAIL_POST),
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
};

export const sendEmail = async (
  to: string,
  subject: string,
  text?: string,
  html?: any
) => {
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: process.env.GMAIL_USERNAME,
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to the " + to);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
