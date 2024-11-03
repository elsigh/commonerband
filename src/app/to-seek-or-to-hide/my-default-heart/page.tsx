import SongPage, { type SongForSongPage } from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "My Default Heart",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799728006&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook:
    "https://songbook.studio/song/-MGGFO8Ofxti9IUbtUUb/my-default-heart",
  lyrics: `My default heart's
Pulled to the dark arts
I like the poisons more than the cures
I can prove it too
Takes more than a few
Chasing that feeling at the start
Before we fall hard

My default heart's
Pulled to the dark arts
I like the shadows more than the forms

Finding that losing you
Tell the same stories too
That was the easy part
Before we fall hard

You're gonna lose your sight if you stare at the sun
burn right through all the good things you've done
Anything worth its while takes all the fun out if you already know why you're making it
My default heart's
Pulled to the dark arts
I like the poisons more than the cures
I can prove it too
Takes more than a few
Chasing that feeling at the start
Before we fall hard
Chasing that feeling at the start
Before we fall hard`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl on Nov. 15, 2024',
};

export default function Song() {
  return <SongPage song={song} />;
}
