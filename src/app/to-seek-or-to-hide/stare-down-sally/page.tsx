import SongPage, { type SongForSongPage } from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Stare Down Sally",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727985&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook:
    "https://songbook.studio/song/-MGGFO__18KGOOEhs_Mo/stare-down-sally",
  lyrics: `Keeps you going when nothing else can
A delicate dose of your own medicine

Take what you came with
leave what you can
a delicate dose don't spread you too thin

Too long since I caught me a glimpse in the moment
Stare down Sally 
she sleeps in a hole that you're craving to crawl in
      fire in your blood
sweet in your tea
sour in your cocktails
holy trinity 

Little fingers
Broken old hands
A delicate dose of your own medicine

Too long since I caught me a glimpse in the moment
Stare down Sally she sleeps in a hole that you're craving to crawl in`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl in Fall 2024',
};

export default function Song() {
  return <SongPage song={song} />;
}
