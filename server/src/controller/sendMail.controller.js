import { asyncHandler } from "../utils/asyncHandler.js";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "next/dist/server/api-utils/index.js";

const notifyProvider = async (fullName, email, phoneNumber, message) => {
  const filePath = path.join(process.cwd(), "public", "html", "sender.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const replacementsOfSender = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    email,
    email,
    message: message,
  };

  const htmlToSend = template(replacementsOfSender);
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rajpatel123370@gmail.com",
      pass: process.env.NODEMAILER_PASS,
    },
  });
  let receiver = {
    from: "rajpatel123370@gmail.com",
    to: "patelraj2@yahoo.com",
    subject: "New Contact Request",
    text: "Got new connection !",
    html: htmlToSend,
    headers: { "x-myheader": "test header" },
  };

  mailTransporter.sendMail(receiver, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      throw new ApiError(401, "Unable to send mail to provider");
    }
  });
};

const sendMail = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  await notifyProvider(fullName, email, phoneNumber, message);

  const filePath = path.join(process.cwd(), "public", "html", "receiver.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);
  const replacements = {
    firstName: fullName,
  };

  const htmlToSend = template(replacements);
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rajpatel123370@gmail.com",
      pass: process.env.NODEMAILER_PASS,
    },
  });
  let receiver = {
    from: "rajpatel123370@gmail.com",
    to: email,
    subject: "Thank You for Contacting Me",
    text: "Don't worry I got your information !",
    html: htmlToSend,
    headers: { "x-myheader": "test header" },
  };

  mailTransporter.sendMail(receiver, function (err, data) {
    if (err) {
      console.log(err);
      res
        .status(200)
        .json(new ApiResponse(200, data, "Successfully send the mail"));
    } else {
      console.log(data);
    }
  });
});

export { sendMail };
