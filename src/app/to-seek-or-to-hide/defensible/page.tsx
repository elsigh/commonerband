import SongPage, {
  METADATA_DESCRIPTION,
  type SongForSongPage,
} from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Defensible",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727994%3Fsecret_token%3Ds-8RoLEo7OLqv&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook: "https://songbook.studio/song/-MGGFOAVHbq-MbipiumV/defensible",
  lyrics: `Take defenible positions
point to outcomes
No offense was intended to bloom
The best fruits their edges scarred
Brighter than your lucky stars.

You've been protecting a monster
Can't say that the talking announcers 
left you with no choice

My impressions are leading 
my fool eyes to focus
on the riveting precious parts

My impressions are needing 
my fool eyes to focus
on the riveting precious parts

   Act like you knew this would happen
called it against the odds
Principally you don't bend your degrees

But you point out the cause
and dodge the effects
of the riveting precious parts

you point out the cause
and dodge the effects
of the riveting precious parts`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description: METADATA_DESCRIPTION,
};

export default function Song() {
  return <SongPage song={song} />;
}
