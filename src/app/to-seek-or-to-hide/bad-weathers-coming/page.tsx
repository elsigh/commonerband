import SongPage, { type SongForSongPage } from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Bad Weather's Coming",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799728012%3Fsecret_token%3Ds-ixQ0bshwMss&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook:
    "https://songbook.studio/song/-MGGFO2zop4mL9PZOQ2B/bad-weathers-coming",

  lyrics: `Bad weather's coming
Bad weather's moving on
It's hard to call, it's 
hard to call it

New moon same season
The stars bright up above
Unfamiliar but enough

Path of least
Resistance
I know your call signs

Underneath
Each of us
Tunnel fault lines

Misfits interrupt your free time
Windfall is coming
Windfalls are moving on
It's hard to call
It's hard to call it

Boxes and corners
Built a maze into the mix
It's foolish to think you fixed
It all
Path of least
Resistance
I know your call signs

Underneath
Each of us
Tunnel fault lines

The misfits make the most of your sweet time`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl in Fall 2024',
};

export default function Song() {
  return <SongPage song={song} />;
}
