import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

import peopleInTheBand from "@/images/people-in-the-band.jpg";
import image from "@/images/instruments-studio.jpg";

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
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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
  title: "Bio",
  description:
    "Commoner's songs get into weird old feelings, smoky memories, and reverent joy and sorrow",
};

export default function About() {
  return (
    <Container className="md:mt-12">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={image}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            With a sound
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-400">
            <p>
              that would love to wade in a stream with Gillian Welch and Townes
              Van Zandt, Commoner's first record "When No One's Looking" strikes
              a melancholy, vibrant tone. The songs get into weird old feelings,
              smoky memories, and reverent joy and sorrow. Commoner has been
              active in San Francisco for 7 years with the band now consisting
              of Lindsey Simon (songwriter, vocals), Edward Marks on drums,
              Richard Weld on bass and Ashley Henderson on harmony vocals. This
              Fall 2024 will see the release of the band's second record, "To
              Seek or to Hide" on 10inch vinyl.
            </p>
            <p>
              Simon grew up in Texas and cut his teeth playing rock clubs in
              Austin for 15 years before landing in San Francisco. He was picked
              to play the weekly residence by Paul Sessums at Austin's Black Cat
              Lounge, opened for touring bands at Emo's, and toured the South
              supporting two previous records with the band Subset.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul>
            <SocialLink
              href="https://facebook.com/commonerband"
              icon={FacebookIcon}
            >
              Follow on Facebook
            </SocialLink>
            <SocialLink
              href="https://instagram.com/commonerband"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:band@commoner.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              band@commoner.com
            </SocialLink>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <Image
          src={peopleInTheBand}
          alt=""
          className="rounded-2xl bg-zinc-100 dark:bg-zinc-800"
        />
      </div>
    </Container>
  );
}
