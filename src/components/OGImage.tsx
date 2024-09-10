import { ImageResponse } from "next/og";

import { PROTOCOL_AND_HOST } from "@/app/utils/constants";

export default function OGImage({
  song,
}: {
  song: {
    title: string;
    img: string;
    color: string;
    size: { width: number; height: number };
  };
}) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: song.size.width,
        height: song.size.height,
      }}
    >
      <img
        src={`${PROTOCOL_AND_HOST}/${song.img}`}
        alt=""
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{ color: song.color, fontSize: "6rem", textAlign: "center" }}
        >
          {song.title}
        </h1>
      </div>
    </div>,
    {
      ...song.size,
    },
  );
}
