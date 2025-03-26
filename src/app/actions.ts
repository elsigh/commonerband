"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function sendContactEmail(_prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    if (!email) {
      return { error: "Please fill out email", email };
    }

    //validate email
    // const emailableUrl = `https://api.emailable.com/v1/verify?email=elsigh@gmail.com&api_key=${process.env.EMAILABLE}&email=${from}&timeout=10`;
    // const emailableResponse = await fetch(emailableUrl, { cache: "no-store" });
    // const emailableData = await emailableResponse.json();
    // console.debug("emailableData", emailableData);
    // if (emailableData.state !== "deliverable") {
    //   return { error: "Invalid email address", inputs };
    // }

    const data = await resend.emails.send({
      from: "noreply@commoner.com",
      to: ["music@commoner.com"],
      subject: "Contact from commoner.com",
      react: EmailTemplate({ email }),
    });
    console.debug("Resent", { data });
    if (data.error) {
      return { error: data.error.message, email };
    }
  } catch (error) {
    console.error(error);
    return { error, email: formData.get("email") || "" };
  }
  redirect("/thank-you");
}

// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from 'google-auth-library';

// const SHEET_ID = "1s-F1lDdV7teQDv0SsW5GU3jDvUeuUOI7ngNb1EAQo6E"

// export async function submitEmail(emailToSubscribe: string) {
//   console.debug("actions.ts submitEmail", emailToSubscribe)
//   try {
//     const auth = new JWT({
//       email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//       key: process.env.GOOGLE_PRIVATE_KEY,
//       scopes: [
//         'https://www.googleapis.com/auth/spreadsheets',
//       ],
//     });
//     const doc = new GoogleSpreadsheet(SHEET_ID, auth);

//     await doc.loadInfo();
//     console.debug("Loaded doc: ", doc.title);

//     const sheet = doc.sheetsByIndex[0];

//     const now = Date.now()
//     const formattedDate = new Date(now).toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'numeric',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     });

//     await sheet.addRow({ Timestamp: formattedDate, Email: emailToSubscribe });
//     return { ok: true };
//   } catch (error) {
//     console.error("Error submitting email:", error);
//     return { ok: false };
//   }
// }
