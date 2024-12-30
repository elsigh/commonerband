import SongPage, {
  METADATA_DESCRIPTION,
  type SongForSongPage,
} from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Cruel Fashion",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799728009&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook: "https://songbook.studio/song/-Ml5Ry_9HB1WSpHqQbFN/cruel-fashion",
  lyrics: `Lay me down
Lay me to rest
Think of every time
I held you on my chest

Rolodex
of pictures when our
Love was pure
You could reason about it If that's all it takes to ruin us
I'll outlast you baby in a cruel fashion 
Played it out hangin on to everything you got
Counting on our descendents

  Take offense
Or take in stride
The choice you make's
To seek or to hide

Collocate your presence
Leave nothing to chance
Be everywhere at once
Take the lead when you dance If all that it takes to ruin us
I'll outlast you baby in a cruel fashion 
Hang it on hang it on with everything you got
Counting on our descendents`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description: METADATA_DESCRIPTION,
};

export default function Song() {
  return <SongPage song={song} />;
}
