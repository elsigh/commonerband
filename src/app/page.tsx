import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import SeekHideCoverFront from "@/images/seek-hide-cover-front.jpg";
import WhenNoOnesLookingCoverFront from "@/images/When-No-Ones-Looking.jpg";
import logoSoundcloud from "@/images/logos/soundcloud.png";
import { SpotifyIcon, XIcon, InstagramIcon } from "@/components/SocialIcons";

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
    <Link className="group -m-1 p-1" {...props}>
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

export default async function Home() {
  return (
    <>
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
          <div className="flex flex-col gap-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Commoner
              </h1>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                is an Americana-sounding band in San Francisco.
              </p>

              <div className="mt-4 flex gap-6 items-end">
                <SocialLink href="#" aria-label="" icon={SpotifyIcon} />
                <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
                <SocialLink
                  href="#"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
              </div>
              <h2 className="mt-12 font-bold text-zinc-900 dark:text-zinc-300">
                Recordings
              </h2>
              <ol className="mt-2 text-base text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>
                  <h3>
                    2024: "To Seek or To Hide", coming in Sept 2024,{" "}
                    <a
                      href="https://buy.stripe.com/eVa15X5Zb4mMcb6aEE"
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pre-Order 10" vinyl
                    </a>
                  </h3>
                  <div>
                    <Image src={logoSoundcloud} alt="" height={12} width={32} />
                  </div>
                  <div>
                    <Image
                      src={SeekHideCoverFront}
                      alt=""
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      className="mt-3 aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    />
                  </div>
                </li>
                <li className="pt-12">
                  <h3>2017: "When No One's Looking"</h3>
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
