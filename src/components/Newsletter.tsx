"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { Button } from "@/components/Button";
import { submitEmail } from "./../app/actions";

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setIsSuccess(null);

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const response = await submitEmail(email);
      console.debug("submitEmail", { response, email });
      const success = !!response.ok;
      setIsSuccess(success);
      console.debug("finished!", { success });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSuccess === true) {
      redirect("/thank-you");
    } else if (isSuccess === false) {
      // Handle error, maybe redirect to /error or show a message
      redirect("/error");
    }
  }, [isSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      method="POST"
    >
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-400">Find out when we're playing.</p>
      <div className="mt-6 flex">
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email address"
          required
          autoComplete="off"
          data-1p-ignore
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-900 focus:outline-none focus:ring-4 focus:ring-orange-700/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-700 dark:focus:ring-orange-500/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          {isSubmitting ? "Joining..." : "Join"}
        </Button>
      </div>
    </form>
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
