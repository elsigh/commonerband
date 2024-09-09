"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

const SHEET_ID = "1s-F1lDdV7teQDv0SsW5GU3jDvUeuUOI7ngNb1EAQo6E"

export async function submitEmail(emailToSubscribe: string) {
  console.debug("actions.ts submitEmail", emailToSubscribe)
  try {
    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
    const doc = new GoogleSpreadsheet(SHEET_ID, auth);

    await doc.loadInfo(); 
    console.debug("Loaded doc: ", doc.title);

    const sheet = doc.sheetsByIndex[0]; 

    const now = Date.now()
    const formattedDate = new Date(now).toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric' 
    });
    
    await sheet.addRow({ Timestamp: formattedDate, Email: emailToSubscribe });
    return { ok: true };
  } catch (error) {
    console.error("Error submitting email:", error);
    return { ok: false };
  }
}