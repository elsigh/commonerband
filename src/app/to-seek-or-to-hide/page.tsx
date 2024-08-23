import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";

import { SoundcloudIcon, AppleIcon } from "@/components/SocialIcons";
import { Button } from "@/components/Button";

import frontCover from "@/images/seek-hide-cover-front.jpg";
import backCover from "@/images/seek-hide-cover-back.jpg";
import labelSide1 from "@/images/seek-hide-label-side1.png";
import labelSide2 from "@/images/seek-hide-label-side2.png";
import interiorLyrics1 from "@/images/seek-hide-interior-lyrics1.jpg";
import interiorLyrics2 from "@/images/seek-hide-interior-lyrics2.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex mt-4")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-fuchsia-500 dark:text-zinc-200 dark:hover:text-fuchsia-500"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-fuchsia-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export const metadata: Metadata = {
  title: "To Seek or To Hide",
  description:
    'Commoner\'s second record, "To Seek or To Hide", will be released on 10" vinyl in Fall 2024',
};

export default function About() {
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
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Commoner's second record, "To Seek or To Hide", will be released
              on 10" vinyl in Fall 2024.
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
      <div className="mt-12 max-w-[800px]">
        <div className="mt-12">
          <Image
            src={interiorLyrics1}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-2xl bg-zinc-100  dark:bg-zinc-800"
          />
        </div>
        <div className="mt-12">
          <Image
            src={interiorLyrics2}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
        <div className="mt-12 grid grid-cols-2">
          <Image
            src={labelSide1}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-l-2xl bg-zinc-100  dark:bg-zinc-800"
          />
          <Image
            src={labelSide2}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rounded-r-2xl bg-zinc-100  dark:bg-zinc-800"
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
        Pre-order 10" vinyl
      </Button>
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
      {/*
      <SocialLink href="#" icon={SpotifyIcon}>
        Listen on Spotify (coming soon)
      </SocialLink>
      */}
    </ul>
  );
}
