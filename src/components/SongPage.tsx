import { SimpleLayout } from "@/components/SimpleLayout";

import { Link } from "next-view-transitions";

export type SongForSongPage = {
  title: string;
  soundcloud: string;
  songbook: string;
  lyrics: string;
};

export const METADATA_DESCRIPTION = `Commoner's second record, "To Seek or To Hide", was released on 10" vinyl on Nov. 2024`;

export default function Song({ song }: { song: SongForSongPage }) {
  return (
    <SimpleLayout title={song.title}>
      <iframe
        title={song.title}
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={song.soundcloud}
      />
      <div className="mt-8">
        <div className="text-right mb-8 md:mb-0">
          <Link
            className="hover:underline text-zinc-400 hover:text-zinc-200"
            href={song.songbook}
          >
            Chords and Lyrics ↗
          </Link>
        </div>
        <pre className="dark:text-zinc-200">{song.lyrics}</pre>
      </div>
    </SimpleLayout>
  );
}
