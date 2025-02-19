import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import "@/styles/tailwind.css";

import src from "@/images/404.jpg";

export default function NotFound() {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Container className="flex h-full w-full items-center justify-center pt-8 sm:pt-16">
          <div className="flex flex-col items-center">
            <p className="text-base font-semibold text-zinc-500">404</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Not here yet
            </h1>
            <p className="mt-4 text-base text-zinc-400">
              These tracks are coming as they do.
            </p>
            <Button href="/" variant="secondary" className="m-4">
              Go back home
            </Button>
            <Image
              src={src}
              width={400}
              alt=""
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </Container>
      </body>
    </html>
  );
}
