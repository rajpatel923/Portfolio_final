import sgMail from "@sendgrid/mail";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const { SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, SENDGRID_PROVIDER_EMAIL } =
  process.env;

if (!SENDGRID_API_KEY || !SENDGRID_FROM_EMAIL || !SENDGRID_PROVIDER_EMAIL) {
  throw new Error(
    "Missing required env vars: SENDGRID_API_KEY, SENDGRID_FROM_EMAIL, SENDGRID_PROVIDER_EMAIL"
  );
}

sgMail.setApiKey(SENDGRID_API_KEY);

const FROM_EMAIL = SENDGRID_FROM_EMAIL;
const PROVIDER_EMAIL = SENDGRID_PROVIDER_EMAIL;

const renderTemplate = (templateName, replacements) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "html",
    `${templateName}.html`
  );
  const source = fs.readFileSync(filePath, "utf-8");
  return handlebars.compile(source)(replacements);
};

const sendMail = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  const providerHtml = renderTemplate("sender", {
    fullName,
    phoneNumber,
    email,
    message,
  });

  const receiverHtml = renderTemplate("receiver", {
    firstName: fullName,
  });

  await Promise.all([
    sgMail.send({
      from: FROM_EMAIL,
      to: PROVIDER_EMAIL,
      subject: "New Contact Request",
      text: `New contact from ${fullName} (${email})`,
      html: providerHtml,
    }),
    sgMail.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank You for Contacting Me",
      text: "I received your message and will get back to you soon.",
      html: receiverHtml,
    }),
  ]);

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Your message has been sent successfully."));
});

export { sendMail };
