import SongPage, { type SongForSongPage } from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "That You Don't",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727979&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook: "https://songbook.studio/song/-MGGFOk3_N70VPFgcWgA/that-you-dont",
  lyrics: `Solid oak has a quality that you don't 
seem to wear out instead stretch and bend, recover
 
It's a losing telephone poll
Predict's that you stay under control

Send the newsletters it's a shame that you don't
Kill our messengers with a kindness that won't
Leave a lasting mark so you can prove to everyone that you don't

Brittle birch has this quality that you don't
50 years then it's quitting time and over

With no moving medical poles
Artists using whatever we got

Send the newsletters it's a shame that you don't
Kill our messengers with a kindness that won't
Leave a lasting mark so you can prove to everyone that you don't`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl on Nov. 15, 2024',
};

export default function Song() {
  return <SongPage song={song} />;
}
