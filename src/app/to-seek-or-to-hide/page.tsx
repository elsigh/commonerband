import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import clsx from "clsx";

import { Container } from "@/components/Container";

import {
  SoundcloudIcon,
  AppleIcon,
  SpotifyIcon,
} from "@/components/SocialIcons";
import { Button } from "@/components/Button";

import frontCover from "@/images/seek-hide-cover-front.jpg";
import backCover from "@/images/seek-hide-cover-back.jpg";
import labelSide1 from "@/images/seek-hide-label-side1.png";
import labelSide2 from "@/images/seek-hide-label-side2.png";
import interiorLyrics1 from "@/images/seek-hide-interior-lyrics1.jpg";
import interiorLyrics2 from "@/images/seek-hide-interior-lyrics2.jpg";
import { TrackListImage } from "@/components/TrackListImage";
import { METADATA_DESCRIPTION } from "@/components/SongPage";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  rel = "noreferrer",
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  rel?: string;
}) {
  return (
    <li className={clsx(className, "flex mt-4")}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition text-zinc-400  hover:text-zinc-200"
        target={rel === "noreferrer" ? "_blank" : undefined}
        rel={rel}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-zinc-200" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function TrackListIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 1a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm0 5a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm0 5a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "To Seek or To Hide",
  description: METADATA_DESCRIPTION,
};

export type Track = {
  title: string;
  href: string;
  coords: number[]; // [x, y, width, height]
};

const trackHeight = 18;
const trackList: Track[] = [
  {
    title: "Bad Weather's Coming",
    href: "bad-weathers-coming",
    coords: [110, 72, 147, trackHeight],
  },
  {
    title: "Cruel Fashion",
    href: "cruel-fashion",
    coords: [83, 92, 95, trackHeight],
  },
  {
    title: "My Default Heart",
    href: "my-default-heart",
    coords: [70, 113, 113, trackHeight],
  },
  {
    title: "Tell Mr. Massey",
    href: "tell-mr-massey",
    coords: [58, 133, 108, trackHeight],
  },
  {
    title: "Defensible",
    href: "defensible",
    coords: [48, 152, 70, trackHeight],
  },

  {
    title: "Passer Through",
    href: "passer-through",
    coords: [110, 72, 147, trackHeight],
  },
  {
    title: "Stare Down Sally",
    href: "stare-down-sally",
    coords: [83, 92, 95, trackHeight],
  },
  {
    title: "Commie Blood",
    href: "commie-blood",
    coords: [70, 113, 113, trackHeight],
  },
  {
    title: "That You Don't",
    href: "that-you-dont",
    coords: [58, 133, 108, trackHeight],
  },
];

export default function ToSeekOrToHide() {
  return (
    <Container className="md:mt-12">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="">
            <Image
              src={backCover}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            To Seek or To Hide
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-400">
            <p>
              Commoner's second record, "To Seek or To Hide", will be released
              on 10" vinyl on Nov. 15, 2024.
            </p>

            <div className="lg:hidden  lg:pl-28">
              <Links />
            </div>
            <div className="">
              <Image
                src={frontCover}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:pl-28">
          <Links />
        </div>
      </div>

      <div className="mt-4 max-w-[800px]">
        <h2
          id="tracklist"
          className="mt-12 text-lg font-semibold text-zinc-100"
        >
          Tracklist
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-x-2">
          <TrackListImage src={labelSide1} trackList={trackList.slice(0, 5)} />
          <TrackListImage src={labelSide2} trackList={trackList.slice(5, 9)} />
        </div>

        <ol className="list-decimal mt-8 pl-8 text-zinc-400">
          {trackList.map((track) => (
            <li key={track.href}>
              <Link
                href={`/to-seek-or-to-hide/${track.href}`}
                className="transition underline hover:text-zinc-200"
              >
                {track.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 max-w-[800px]">
        <h2
          id="tracklist"
          className="mt-12 text-lg font-semibold text-zinc-100"
        >
          Lyrics
        </h2>
        <div className="mt-8">
          <Image
            src={interiorLyrics1}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-2xl bg-zinc-100  dark:bg-zinc-800"
          />
        </div>
        <div className="mt-8">
          <Image
            src={interiorLyrics2}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
    </Container>
  );
}

function Links() {
  return (
    <ul>
      <Button
        type="submit"
        className="flex-none"
        href="https://buy.stripe.com/3cs4i9fzLcTia2Y8wx"
        target="_blank"
        rel="noreferrer"
      >
        Buy the 10" vinyl
      </Button>
      <SocialLink
        href="https://open.spotify.com/album/21Zk4Cig8N0aI45jJxy4VG"
        icon={SpotifyIcon}
      >
        Listen on Spotify
      </SocialLink>
      <SocialLink
        href="https://soundcloud.com/commoner/sets/to-seek-or-to-hide"
        aria-label="Listen on Soundcloud"
        icon={SoundcloudIcon}
      >
        Listen on Soundcloud
      </SocialLink>

      <SocialLink
        href="https://music.apple.com/us/album/to-seek-or-to-hide/1760747915?uo=4&app=itunes&at=1001lry3&ct=dashboard"
        icon={AppleIcon}
      >
        Listen on Apple Music
      </SocialLink>
      <SocialLink href="#tracklist" icon={TrackListIcon} rel="internal">
        Tracklist
      </SocialLink>
    </ul>
  );
}
