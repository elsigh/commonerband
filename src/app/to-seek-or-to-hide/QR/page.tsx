import type { Metadata } from "next";
import Image from "next/image";

import frontCover from "@/images/seek-hide-cover-front.jpg";
import QRCode from "@/images/QR-seek-hide.png";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "QR Code by Commoner",
  description: "QR Code to buy the album",
};

export default function Song() {
  return (
    <Container className="flex items-center ">
      <div className="mt-10 mb-10">
        <Image
          src={frontCover}
          alt=""
          width={300}
          className="aspect-square rounded-2xl m-auto"
        />
      </div>
      <div>
        <Image
          src={QRCode}
          alt="QR Code to buy the album"
          width={400}
          className=" m-auto"
        />
      </div>
    </Container>
  );
}
