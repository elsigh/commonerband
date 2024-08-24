import type { Metadata } from "next";
import Image from "next/image";

import { SimpleLayout } from "@/components/SimpleLayout";

import lyricsImg from "@/images/seek-hide-interior-lyrics2.jpg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "To Seek or To Hide",
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl in Fall 2024',
};

export default function ToSeekOrToHide() {
  return (
    <SimpleLayout title="Commie Blood">
      <div className="mb-8">
        <Link
          href="/to-seek-or-to-hide"
          className=" dark:text-zinc-200  dark:hover:text-fuchsia-500"
        >
          ← To Seek or To Hide
        </Link>
      </div>
      <iframe
        title="Commie Blood - the song"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727982%3Fsecret_token%3Ds-FCmqpxHoLXH&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
      <div className="mt-12">
        <Image
          src={lyricsImg}
          alt="Lyrics for Commie Blood"
          width={800}
          height={800}
        />
      </div>
    </SimpleLayout>
  );
}
