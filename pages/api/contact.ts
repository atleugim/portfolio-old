import { NextApiRequest, NextApiResponse } from "next";

export default function sendContact(req: NextApiRequest, res: NextApiResponse) {
  try {
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: req.body.email,
      to: process.env.GMAIL_EMAIL,
      subject: `New portfolio message from ${req.body.name}`,
      html: `
        <h2>New portfolio message from: ${req.body.name}</h2>
        <p>Email: ${req.body.email}</p>
        <p>Message: ${req.body.message}</p>
      `,
    };

    transporter.sendMail(mailData, function (err: Error, _info: any) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Message sent successfully",
        });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err,
    });
  }
}
