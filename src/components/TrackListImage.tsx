"use client";

import type { Track } from "@/app/(main)/to-seek-or-to-hide/page";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

export function TrackListImage({
  src,
  trackList,
}: {
  src: StaticImageData;
  trackList: Track[];
}) {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [debugMode, _setDebugMode] = useState(true);
  // https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xaL9ZTvtJowmQdqTAvFYnbS0KW2tXQ.png"
  //console.debug("activeTrack", activeTrack);

  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative">
        <Image
          src={src}
          alt="Commoner - To Seek or to Hide Album Label Side 1"
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rounded-2xl bg-zinc-100  dark:bg-zinc-800"
        />
        {trackList.map((track) => (
          <Link
            key={track.href}
            href={`/to-seek-or-to-hide/${track.href}`}
            className={`absolute block transition-all duration-200 ease-in-out hover:bg-white hover:bg-opacity-20 ${debugMode ? "" : ""}`}
            style={{
              left: `${track.coords[0] / 4}%`,
              top: `${track.coords[1] / 4}%`,
              width: `${track.coords[2] / 4}%`,
              height: `${track.coords[3] / 4}%`,
            }}
            onMouseEnter={() => setActiveTrack(track.title)}
            onMouseLeave={() => setActiveTrack(null)}
            aria-label={track.title}
          />
        ))}
        {activeTrack && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="bg-black bg-opacity-75 text-white p-2 rounded">
              {activeTrack}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
