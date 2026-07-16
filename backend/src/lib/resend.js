// 1. Force dotenv to load FIRST
import "dotenv/config"; 
import { ENV } from "./env.js";

// 2. Now process.env.RESEND_API_KEY is guaranteed to exist
export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};