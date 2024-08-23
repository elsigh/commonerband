import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import SeekHideCoverFront from "@/images/seek-hide-cover-front.jpg";
import WhenNoOnesLookingCoverFront from "@/images/When-No-Ones-Looking.jpg";

import {
  AppleIcon,
  FacebookIcon,
  SpotifyIcon,
  SoundcloudIcon,
  InstagramIcon,
} from "@/components/SocialIcons";

export default async function Home() {
  return (
    <>
      <Container className="md:mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
          <div className="flex flex-col gap-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Commoner
              </h1>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                is an Americana-sounding band from San Francisco.
              </p>

              <div className="mt-4 flex gap-6 items-end">
                <SocialLink
                  href="https://facebook.com/commonerband"
                  aria-label="Follow on Facebook"
                  icon={FacebookIcon}
                />
                <SocialLink
                  href="#"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
              </div>
              <ol className="mt-12 text-base text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>
                  <h3>
                    <strong>"To Seek or To Hide"</strong>
                    <span className="ml-4">Coming soon (Oct 1, 2024)</span>
                  </h3>
                  <div className="mt-4 flex gap-6 items-end">
                    <Button
                      type="submit"
                      className="flex-none"
                      href="https://buy.stripe.com/3cs4i9fzLcTia2Y8wx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pre-order 10" vinyl
                    </Button>
                    {/*
                    <SocialLink
                      href="#"
                      aria-label="Listen on Spotify (coming soon)"
                      icon={SpotifyIcon}
                    />
                    */}
                    <SocialLink
                      href="https://soundcloud.com/commoner/sets/to-seek-or-to-hide"
                      aria-label="Listen on Soundcloud"
                      icon={SoundcloudIcon}
                    />

                    <SocialLink
                      href="https://music.apple.com/us/album/to-seek-or-to-hide/1760747915?uo=4&app=itunes&at=1001lry3&ct=dashboard"
                      aria-label="Listen on Apple Music"
                      icon={AppleIcon}
                    />
                  </div>
                  <div>
                    <Link href="/to-seek-or-to-hide">
                      <Image
                        src={SeekHideCoverFront}
                        alt=""
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        className="mt-3 aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                      />
                    </Link>
                  </div>
                </li>
                <li className="pt-12">
                  <h3>
                    <strong>"When No One's Looking"</strong>
                    <span className="ml-4">2017</span>
                  </h3>
                  <div className="mt-4 flex gap-6 items-end">
                    <SocialLink
                      href="https://open.spotify.com/album/1EvZujvFSt2laJhFxLh9hf"
                      aria-label="Listen on Spotify"
                      icon={SpotifyIcon}
                    />
                    <SocialLink
                      href="https://soundcloud.com/commoner/sets/when-no-ones-looking"
                      aria-label="Listen on Soundcloud"
                      icon={SoundcloudIcon}
                    />
                    <SocialLink
                      href="https://itunes.apple.com/us/album/when-no-ones-looking/id1258361781?uo=4&app=music&at=1001lry3&ct=dashboard"
                      aria-label="Listen on Apple Music"
                      icon={AppleIcon}
                    />
                  </div>
                  <Image
                    src={WhenNoOnesLookingCoverFront}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className="mt-3 aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </li>
              </ol>
            </div>
          </div>

          <div className="space-y-10 lg:pr-52">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      className="group -m-1 p-1"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Find out when we're playing.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-fuchsia-400 dark:focus:ring-fuchsia-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}
