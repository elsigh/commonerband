import SongPage, { type SongForSongPage } from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Passer Through",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727991&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook: "https://songbook.studio/song/-MGGFOC2HC394ZeV28ZU/passer-through",
  lyrics: `You don't run away when you’re
outdone
outnumbered and 
outgunned

Outdone for the 
ump-teenth time
fell in your ways and
I’ll fell in mine

Won’t you wait a minute
wait a minute
passer through
passer through
In it together like 
our dirty clothes
bunched by the back door
Heaven knows

It's hard to come by the
things that last when you're
Moving on
Moving fast

Won’t you wait a minute
wait a minute
passer through
passer through
`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl in Fall 2024',
};

export default function Song() {
  return <SongPage song={song} />;
}
