import { ContactFormData } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";

const setupNodemailer = () => {
  const nodemailer = require("nodemailer");
  return nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });
};

const send = async (data: ContactFormData) => {
  const mailData = {
    from: data.email,
    to: process.env.GMAIL_EMAIL,
    subject: `New portfolio message from ${data.name}`,
    html: `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>
    `,
  };

  const transporter = setupNodemailer();

  // return transporter.sendMail(mailData);
  return true;
};

export default function sendContact(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    send(req.body)
      .then((_) => {
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            success: true,
            message: "Message sent successfully",
          })
        );
        resolve(res);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(
          JSON.stringify({
            success: false,
            message: err,
          })
        );
        reject(err);
      });
  });
}
