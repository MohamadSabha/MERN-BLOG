import SibApiV3Sdk from "sib-api-v3-sdk";
import { CustomErrorHandler } from "../utils/error.js";

export const Sendemail = async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(CustomErrorHandler(400, "All fields are required"));
  }

  try {
    // Brevo client
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

    // Send message to OWNER
    await emailApi.sendTransacEmail({
      sender: { email: process.env.EMAIL_SENDER, name: "CODE NEST BLOG" },
      to: [{ email: process.env.EMAIL_RECEIVER }],
      subject: `New Contact from ${name}`,
      textContent: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      replyTo: { email },
    });

    // Auto-reply to user
    if (process.env.SEND_AUTOREPLY === "true") {
      await emailApi.sendTransacEmail({
        sender: { email: process.env.EMAIL_SENDER, name: "CODE NEST BLOG" },
        to: [{ email }],
        subject: "We received your message",
        textContent: `Hi ${name},\n\nThanks for reaching out! We'll get back to you soon.\n\nBest regards,\nCODE NEST TEAM`,
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    // Send a structured error to  middleware
    return next(
      CustomErrorHandler(
        500,
        "Failed to send email. Please try again later.",
        err
      )
    );
  }
};
