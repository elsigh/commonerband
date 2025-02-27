"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import "@/styles/tailwind.css";

import src from "@/images/404.jpg";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // Track the error when the component mounts
  useEffect(() => {
    track("Runtime Error", {
      error: error.message,
    });
  }, [error]);

  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Container className="flex h-full w-full items-center justify-center pt-8 sm:pt-16">
          <div className="flex flex-col items-center">
            <p className="text-base font-semibold text-zinc-500">Oops!</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Something went wrong
            </h1>
            <code className="mt-4 text-base text-zinc-400">
              Error Message: {error.message || "An unexpected error occurred"}
            </code>
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
