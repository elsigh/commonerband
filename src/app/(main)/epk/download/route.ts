import { join } from "path";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  const pdf = await readFile(join(process.cwd(), "public", "commoner-epk.pdf"));
  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Commoner-EPK.pdf"',
      "Content-Length": String(pdf.byteLength),
    },
  });
}
