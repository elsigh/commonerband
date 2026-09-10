import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  FacebookIcon,
  InstagramIcon,
  SoundcloudIcon,
  SpotifyIcon,
} from "@/components/SocialIcons";

import peopleInTheBand from "@/images/people-in-the-band.jpg";

function TrackLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
    >
      <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-orange-700" />
      <span className="ml-2">{children}</span>
    </Link>
  );
}

function YouTubeIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.6A3 3 0 0 0 .5 7.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-4.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"
      />
    </svg>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "EPK",
  description:
    "Electronic press kit for Commoner, a San Francisco Americana band: music, live video, bio, and booking contact.",
};

const SEEK_HIDE_SPOTIFY = "https://open.spotify.com/album/21Zk4Cig8N0aI45jJxy4VG";
const SEEK_HIDE_SOUNDCLOUD = "https://soundcloud.com/commoner/sets/to-seek-or-to-hide";
const WNOL_SPOTIFY = "https://open.spotify.com/album/1EvZujvFSt2laJhFxLh9hf";
const WNOL_SOUNDCLOUD = "https://soundcloud.com/commoner/sets/when-no-ones-looking";

const tracks = [
  {
    title: "Foul Luck",
    record: "\u201CWhen No One\u2019s Looking\u201D (2017)",
    spotify: WNOL_SPOTIFY,
    soundcloud: WNOL_SOUNDCLOUD,
    songPage: undefined,
  },
  {
    title: "Cruel Fashion",
    record: "\u201CTo Seek or To Hide\u201D (2024)",
    spotify: SEEK_HIDE_SPOTIFY,
    soundcloud: SEEK_HIDE_SOUNDCLOUD,
    songPage: "/to-seek-or-to-hide/cruel-fashion",
  },
  {
    title: "My Default Heart",
    record: "\u201CTo Seek or To Hide\u201D (2024)",
    spotify: SEEK_HIDE_SPOTIFY,
    soundcloud: SEEK_HIDE_SOUNDCLOUD,
    songPage: "/to-seek-or-to-hide/my-default-heart",
  },
];

export default function EPK() {
  return (
    <Container className="md:mt-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Electronic Press Kit
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          Commoner &middot; Americana band &middot; San Francisco
        </p>
        <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
          RIYL Gillian Welch, Townes Van Zandt
        </p>
        <p className="mt-6">
          <Link
            href="/epk/download"
            className="inline-flex items-center rounded-full bg-orange-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-800"
          >
            Download one-sheet (PDF)
          </Link>
        </p>
      </div>

      <div className="mt-10">
        <Image
          src={peopleInTheBand}
          alt="Commoner, a three-piece Americana band from San Francisco"
          className="rounded-2xl bg-zinc-100 dark:bg-zinc-800"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            About
          </h2>
          <div className="mt-4 space-y-5 text-base text-zinc-400">
            <p>
              With a sound that would love to wade in a stream with Gillian
              Welch and Townes Van Zandt, Commoner&rsquo;s songs get into weird
              old feelings, smoky memories, and reverent joy and sorrow. Active
              in San Francisco for 9 years, the band now plays as a trio:
              Lindsey Simon (songwriter, vocals), Edward Marks (drums), and
              Richard Weld (bass).
            </p>
            <p>
              Their second record, &ldquo;To Seek or To Hide,&rdquo; was
              released on 10-inch vinyl in November 2024. The band previously
              played Noise Pop&rsquo;s Americanafest.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Sync licensing
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Commoner is unsigned and owns its masters and publishing outright
            &mdash; one-stop clearance for film and TV placements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Featured tracks
          </h2>
          <ul className="mt-4 divide-y divide-zinc-100 dark:divide-zinc-800">
            {tracks.map((track) => (
              <li key={track.title} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    {track.songPage ? (
                      <Link
                        href={track.songPage}
                        className="transition hover:text-orange-700"
                      >
                        &ldquo;{track.title}&rdquo;
                      </Link>
                    ) : (
                      <>&ldquo;{track.title}&rdquo;</>
                    )}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">
                    {track.record}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  <TrackLink href={track.spotify} icon={SpotifyIcon}>
                    Spotify
                  </TrackLink>
                  <TrackLink href={track.soundcloud} icon={SoundcloudIcon}>
                    SoundCloud
                  </TrackLink>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Live
        </h2>
        <div className="mt-4 aspect-video overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <iframe
            src="https://www.youtube.com/embed/8rWIlAgyQeU"
            title='Commoner live at Bottom of the Hill, San Francisco'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
          Live at Bottom of the Hill, San Francisco &mdash; &ldquo;I Wanna Be
          Sedated&rdquo; (Ramones cover)
        </p>
      </section>

      <section className="mt-12 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Contact
        </h2>
        <p className="mt-4 text-base text-zinc-400">
          For shows and sync:{" "}
          <Link
            href="mailto:band@commoner.com"
            className="font-medium text-zinc-200 transition hover:text-orange-700"
          >
            band@commoner.com
          </Link>
        </p>
        <ul className="mt-6">
          <li className={clsx("flex")}>
            <Link
              href="https://instagram.com/commonerband"
              target="_blank"
              rel="noreferrer"
              className="group flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
            >
              <InstagramIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-700" />
              <span className="ml-4">Instagram</span>
            </Link>
          </li>
          <li className={clsx("mt-4", "flex")}>
            <Link
              href="https://www.facebook.com/commonerband"
              target="_blank"
              rel="noreferrer"
              className="group flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
            >
              <FacebookIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-700" />
              <span className="ml-4">Facebook</span>
            </Link>
          </li>
          <li className={clsx("mt-4", "flex")}>
            <Link
              href="https://www.youtube.com/watch?v=8rWIlAgyQeU"
              target="_blank"
              rel="noreferrer"
              className="group flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
            >
              <YouTubeIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-700" />
              <span className="ml-4">YouTube</span>
            </Link>
          </li>
          <li className={clsx("mt-4", "flex")}>
            <Link
              href="mailto:band@commoner.com"
              className="group flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
            >
              <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-700" />
              <span className="ml-4">band@commoner.com</span>
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}
