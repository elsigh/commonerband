import Link from "next/link";
import { connection } from "next/server";

import { ContainerInner, ContainerOuter } from "@/components/Container";
import { GIGS_LINK } from "@/constants";

function NavLink({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <Link
      href={href}
      className="transition text-zinc-400 hover:text-zinc-500"
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}

export async function Footer() {
  await connection();

  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/bio">Bio</NavLink>
                <NavLink href="/to-seek-or-to-hide">To Seek or To Hide</NavLink>
                <NavLink href={GIGS_LINK} target="_blank" rel="noreferrer">
                  Shows
                </NavLink>
              </div>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Commoner, all rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
