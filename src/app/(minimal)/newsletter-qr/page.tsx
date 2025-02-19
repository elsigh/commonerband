"use client";

import { QRCodeSVG } from "qrcode.react";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex-row">
        <div className="text-white p-6 text-2xl font-bold">
          Join the Commoner mailing list:
        </div>
        <div className="p-6">
          <QRCodeSVG
            value="https://commoner.com/newsletter"
            size={400}
            level="H"
            marginSize={4}
            className="dark:bg-white rounded-lg p-2"
          />
        </div>
      </div>
    </div>
  );
}
