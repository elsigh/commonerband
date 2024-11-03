import SongPage, { type SongForSongPage } from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Commie Blood",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727982%3Fsecret_token%3Ds-FCmqpxHoLXH&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook: "https://songbook.studio/song/-MGGFOG12va9BuQzt6A6/commie-blood",
  lyrics: `Falling forward in slow waves
The crash before the calmest days
It sparks at the end of
It sparks at the end of a fuse.

Pull and push down 101
A constant pour of frustration
Turn signals over
Turn signals overused

You woke up with a New York attitude
Like there's nothing cooler behind the moon
Posing for a portrait that no one's waiting for
The frame'll cost you extra
So cut your long story short

A little steam goes a long way
Commie blood it bleeds coal gray
Nothing at the end of
It's dry up at the end of your roots

Grafted to a barb-wire vine
Wysteria in bloom and decline
Crafts & arts & arrows
the baby sparrows choke and sing it out

You woke up with a New York attitude
Like there's nothing cooler behind the moon
The broken deal you're using 
to keep the fire new
Never issue dull reports
So cut your long story short`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl on Nov. 15, 2024',
};

export default function Song() {
  return <SongPage song={song} />;
}
