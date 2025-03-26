import { Container } from "@/components/Container";
import Link from "next/link";

const defaultBacklink = {
  href: "/to-seek-or-to-hide#tracklist",
  label: "To Seek or To Hide",
};

export function SimpleLayout({
  title,
  intro,
  backLink = defaultBacklink,
  children,
}: {
  title: string;
  intro?: string;
  backLink?: { href: string; label: string };
  children?: React.ReactNode;
}) {
  return (
    <Container className="md:mt-8">
      <header className="max-w-2xl">
        {backLink && (
          <div className="mb-8">
            <Link
              href={backLink.href}
              className="text-zinc-400 hover:text-zinc-200"
            >
              ← {backLink.label}
            </Link>
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        {intro && <p className="mt-6 text-base text-zinc-400">{intro}</p>}
      </header>
      {children && <div className="mt-12">{children}</div>}
    </Container>
  );
}
