import { asyncHandler } from "../utils/asyncHandler.js";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { ApiResponse } from "../utils/ApiResponse.js";

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

const notifyProvider = async (fullName, email, phoneNumber, message) => {
  const filePath = path.join(process.cwd(), "public", "html", "sender.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const htmlToSend = template({ fullName, phoneNumber, email, message });

  await createTransporter().sendMail({
    from: process.env.NODEMAILER_USER,
    to: "patelraj2@yahoo.com",
    subject: "New Contact Request",
    text: "Got new connection !",
    html: htmlToSend,
    headers: { "x-myheader": "test header" },
  });
};

const sendMail = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  await notifyProvider(fullName, email, phoneNumber, message);

  const filePath = path.join(process.cwd(), "public", "html", "receiver.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const htmlToSend = template({ firstName: fullName });

  await createTransporter().sendMail({
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "Thank You for Contacting Me",
    text: "Don't worry I got your information !",
    html: htmlToSend,
    headers: { "x-myheader": "test header" },
  });

  res.status(200).json(new ApiResponse(200, {}, "Successfully sent the mail"));
});

export { sendMail };
