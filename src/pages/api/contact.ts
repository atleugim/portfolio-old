import { ContactFormData } from "@/core/utils/types";
import { NextApiRequest, NextApiResponse } from "next";

const setupNodemailer = () => {
  const nodemailer = require("nodemailer");
  return nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.HOSTINGER_EMAIL,
      pass: process.env.HOSTINGER_PASSWORD,
    },
    secure: true,
  });
};

const send = async (data: ContactFormData) => {
  const mailData = {
    from: process.env.HOSTINGER_ALIAS_EMAIL,
    to: process.env.HOSTINGER_EMAIL,
    subject: `New portfolio message from ${data.name}`,
    html: `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>
    `,
  };

  const transporter = setupNodemailer();
  // verify connection configuration
  // transporter.verify(function (error: any, success: any) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take our messages");
  //   }
  // });

  return transporter.sendMail(mailData);
};

const sendContact = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await send(req.body);

    if (data) {
      res.statusCode = 200;
      return res.end(
        JSON.stringify({
          success: true,
          message: "Message sent successfully",
        })
      );
    }

    throw new Error("Message not sent");
  } catch (err) {
    res.statusCode = 500;
    return res.end(
      JSON.stringify({
        success: false,
        message: err,
      })
    );
  }
};

export default sendContact;
