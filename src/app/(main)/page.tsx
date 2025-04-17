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
import Newsletter from "@/components/Newsletter";
import { GIGS_LINK } from "@/constants";

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
              <p className="text-base text-zinc-400">
                is an Americana-sounding band from San Francisco.
              </p>

              <div className="mt-4 flex gap-4 items-end">
                <SocialLink
                  href="https://www.instagram.com/commonerband"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href={GIGS_LINK}
                  aria-label="Follow on Facebook"
                  icon={FacebookIcon}
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
              <ol className="mt-12 text-base text-zinc-400 space-y-1">
                <li>
                  <h3>
                    <strong>"To Seek or To Hide"</strong>
                    <span className="ml-4">Released Nov 2024</span>
                  </h3>

                  <div className="mt-4 flex gap-6 items-center">
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
                      aria-label="Listen on Spotify"
                      icon={SpotifyIcon}
                    />
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
                        priority
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
