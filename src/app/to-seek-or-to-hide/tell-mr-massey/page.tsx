import SongPage, {
  METADATA_DESCRIPTION,
  type SongForSongPage,
} from "@/components/SongPage";
import type { Metadata } from "next";

const song: SongForSongPage = {
  title: "Tell Mr. Massey",
  soundcloud:
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799727997&color=%2368447c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  songbook: "https://songbook.studio/song/-MGGFON7wg0fjknY7JYz/tell-mr-massey",
  lyrics: `Tell Mister Massey
Now he's only got himself
Is he willing trust his own to
paint a picture of perfect health

Or that 45
Strapped to his thigh

If I could see your weaknesses
Color-coded, bar-charted
Hanging down beneath your chin

Could you love me if you knew
how off-course and black and blue
this ship has sailed more than a few times into 
Reckless abandon
and the friends that you never made
haunt and cling to you
from dreams that never came

True as pie
what a fool am I

If I could see your weaknesses
color-coded, bar-charted
hanging under your chiseled chin

Could you love me if you knew
how off-course and black and blue
this ship has sailed more than a few times into 

Silent days and silent nights
echo forth and back 
and right in front of you`,
};

export const metadata: Metadata = {
  title: `${song.title} by Commoner`,
  description: METADATA_DESCRIPTION,
};

export default function Song() {
  return <SongPage song={song} />;
}
