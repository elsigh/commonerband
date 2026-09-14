import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import {
  FacebookIcon,
  InstagramIcon,
  SoundcloudIcon,
  SpotifyIcon,
} from "@/components/SocialIcons";

// Instagram originals live in public/epk/ (photo-DS3tIdcCeBY, photo-DJe9PbPyomR, live-DIjO5gOzPnt).

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

function DownloadIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path
        d="M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5M5 20h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "EPK",
  description:
    "Electronic press kit for Commoner, a San Francisco Americana trio: bio, selected shows, music, live video, photos, and booking contact.",
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

// Add more selected stages here as they land.
const selectedShows = [
  {
    name: "Noise Pop\u2019s Americanafest",
    detail: "San Francisco",
  },
  {
    name: "Bottom of the Hill",
    detail: "San Francisco",
  },
  {
    name: "The Plough and Stars",
    detail: "San Francisco",
  },
  {
    name: "Hopmonk",
    detail: "Opening for Glen Phillips",
  },
];

type LiveClip = {
  id: string;
  title: string;
  caption: string;
  youtubeId?: string;
  vimeoId?: string;
  // Hosted file in public/epk/ — prefer this for original live clips.
  src?: string;
  poster?: string;
  captionsSrc?: string;
  href?: string;
};

const originalLiveVideo: LiveClip = {
  id: "live-DIjO5gOzPnt",
  title: "Original live performance",
  caption:
    "Original live \u2014 opening for Glen Phillips at Hopmonk. Video by Maddy.",
  src: "/epk/live-DIjO5gOzPnt.mp4",
  poster: "/epk/live-DIjO5gOzPnt.jpg",
  captionsSrc: "/epk/live-DIjO5gOzPnt.vtt",
  href: "https://www.instagram.com/commonerband/reel/DIjO5gOzPnt/",
};

const alsoLiveVideo: LiveClip = {
  id: "ramones-cover-both",
  title: "\u201CI Wanna Be Sedated\u201D (Ramones cover)",
  caption: "Also: live at Bottom of the Hill, San Francisco",
  youtubeId: "8rWIlAgyQeU",
};

type PressPhoto = {
  caption: string;
  alt: string;
  src?: StaticImageData | string;
  width?: number;
  height?: number;
  downloadHref?: string;
  downloadLabel?: string;
  href?: string;
};

const photos: PressPhoto[] = [
  {
    caption: "Live at the Plough and Stars",
    alt: "Commoner playing live at the Plough and Stars, San Francisco",
    src: "/epk/photo-DS3tIdcCeBY.jpg",
    width: 1440,
    height: 1920,
    downloadHref: "/epk/photo-DS3tIdcCeBY.jpg",
    downloadLabel: "Download",
    href: "https://www.instagram.com/commonerband/p/DS3tIdcCeBY/",
  },
  {
    caption: "Live at the Plough and Stars",
    alt: "Commoner live at the Plough and Stars, San Francisco",
    src: "/epk/photo-DJe9PbPyomR.jpg",
    width: 1440,
    height: 1440,
    downloadHref: "/epk/photo-DJe9PbPyomR.jpg",
    downloadLabel: "Download",
    href: "https://www.instagram.com/commonerband/p/DJe9PbPyomR/",
  },
];

function liveEmbedSrc(clip: LiveClip) {
  if (clip.youtubeId) {
    return `https://www.youtube.com/embed/${clip.youtubeId}`;
  }
  if (clip.vimeoId) {
    return `https://player.vimeo.com/video/${clip.vimeoId}`;
  }
  return null;
}

function LiveVideoFrame({
  clip,
  className,
}: {
  clip: LiveClip;
  className?: string;
}) {
  const embedSrc = liveEmbedSrc(clip);
  const frameClass = clip.src ? "aspect-square" : "aspect-video";

  return (
    <figure className={className}>
      <div
        className={`${frameClass} overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800`}
      >
        {clip.src ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={clip.poster}
            title={clip.title}
            className="h-full w-full object-cover"
          >
            <source src={clip.src} type="video/mp4" />
            <track
              kind="captions"
              src={
                clip.captionsSrc ?? clip.src.replace(/\.mp4$/i, ".vtt")
              }
              srcLang="en"
              label="English"
              default
            />
          </video>
        ) : embedSrc ? (
          <iframe
            src={embedSrc}
            title={clip.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center border border-dashed border-zinc-300 px-6 text-center dark:border-zinc-600">
            <p className="text-sm font-medium text-zinc-300">
              Original live video coming soon
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-zinc-500">
        {clip.caption}
        {clip.href ? (
          <>
            {" "}
            <Link
              href={clip.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-400 transition hover:text-orange-700"
            >
              Instagram
            </Link>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}

function PhotoCard({ photo }: { photo: PressPhoto }) {
  return (
    <figure>
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center border border-dashed border-zinc-300 px-6 text-center dark:border-zinc-600">
            <p className="text-sm font-medium text-zinc-300">
              Hi-res stage photo coming soon
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500">
        <span>{photo.caption}</span>
        <span className="inline-flex items-center gap-4">
          {photo.href ? (
            <Link
              href={photo.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-400 transition hover:text-orange-700"
            >
              Instagram
            </Link>
          ) : null}
          {photo.downloadHref ? (
            <a
              href={photo.downloadHref}
              download
              className="inline-flex items-center gap-1 font-medium text-zinc-400 transition hover:text-orange-700"
            >
              <DownloadIcon className="h-4 w-4" />
              {photo.downloadLabel ?? "Download"}
            </a>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}

export default function EPK() {
  return (
    <Container className="md:mt-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Electronic Press Kit
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          Local SF Americana trio &middot; 2024 vinyl &middot; Noise Pop
          Americanafest
        </p>
        <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
          Commoner &middot; Americana &middot; San Francisco
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
          src="/epk/photo-DS3tIdcCeBY.jpg"
          alt="Commoner playing live at the Plough and Stars, San Francisco"
          width={1440}
          height={1920}
          className="rounded-2xl bg-zinc-100 dark:bg-zinc-800"
          priority
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            About
          </h2>
          <div className="mt-4 space-y-5 text-base text-zinc-400">
            <p>
              Commoner is a San Francisco Americana trio in the lane of Gillian
              Welch and Townes Van Zandt &mdash; smoky, melancholy songs about
              old feelings and hard-won joy. Lindsey Simon (songs/vocals) cut
              his teeth in Austin (Black Cat Lounge residence, Emo&rsquo;s
              supports, touring with Subset) before planting the band in SF,
              where they&rsquo;ve been active for nine years with Edward Marks
              (drums) and Richard Weld (bass).
            </p>
            <p>
              Second record &ldquo;To Seek or To Hide&rdquo; came out on 10&quot;
              vinyl in November 2024. Selected stages include Noise
              Pop&rsquo;s Americanafest and Bottom of the Hill. Unsigned; own
              masters and publishing (one-stop for sync).
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Selected shows
          </h2>
          <ul className="mt-4 divide-y divide-zinc-100 dark:divide-zinc-800">
            {selectedShows.map((show) => (
              <li key={show.name} className="py-3">
                <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                  {show.name}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{show.detail}</p>
              </li>
            ))}
          </ul>
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
        <p className="mt-3 text-base text-zinc-400">
          Original live performance.
        </p>
        <div className="mt-6 max-w-md">
          <LiveVideoFrame clip={originalLiveVideo} />
          <details className="mt-4 text-sm text-zinc-500">
            <summary className="cursor-pointer font-medium text-zinc-400 transition hover:text-orange-700">
              Transcript
            </summary>
            <div className="mt-3 space-y-3 text-zinc-400">
              <p>
                Live performance of &ldquo;My Default Heart&rdquo; at Hopmonk.
              </p>
              <p className="whitespace-pre-line">
                {`My default heart's
Pulled to the dark arts

I like the poisons more than the cures

I can prove it too
Takes more than a few

Chasing that feeling at the start
Before we fall hard`}
              </p>
            </div>
          </details>
        </div>
        <div className="mt-10 max-w-2xl">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Also
          </h3>
          <LiveVideoFrame clip={alsoLiveVideo} className="mt-3" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Photos
        </h2>
        <p className="mt-3 text-base text-zinc-400">
          Live shots from the Plough and Stars. Download for press and booking.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {photos.map((photo) => (
            <PhotoCard key={photo.downloadHref ?? photo.caption} photo={photo} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Tech
        </h2>
        <p className="mt-4 text-base text-zinc-400">
          Trio: vocals/guitar, drums, bass.
        </p>
        <p className="mt-3 text-base text-zinc-400">
          Stage plot available on request &mdash;{" "}
          <Link
            href="mailto:band@commoner.com"
            className="font-medium text-zinc-200 transition hover:text-orange-700"
          >
            band@commoner.com
          </Link>
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
          <li className="flex">
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
          <li className="mt-4 flex">
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
          <li className="mt-4 flex">
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
          <li className="mt-4 flex">
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
