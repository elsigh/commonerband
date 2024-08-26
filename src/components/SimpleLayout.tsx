import { Container } from "@/components/Container";
import Link from "next/link";

export function SimpleLayout({
  title,
  intro,
  backLink = true,
  children,
}: {
  title: string;
  intro?: string;
  backLink?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Container className="md:mt-8">
      <header className="max-w-2xl">
        {backLink && (
          <Link
            href="/to-seek-or-to-hide"
            className=" dark:text-zinc-200  dark:hover:text-zinc-500"
          >
            ← To Seek or To Hide
          </Link>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        )}
      </header>
      {children && <div className="mt-12">{children}</div>}
    </Container>
  );
}
