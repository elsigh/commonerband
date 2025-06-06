"use client";

import { useActionState } from "react";

import { Button } from "@/components/Button";
import { sendContactEmail } from "@/app/actions";

export default function Newsletter() {
  const initialState = {
    error: null,
    email: "",
  };
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-400">Find out when we're playing.</p>
      {!!state?.error && (
        <p className="mt-2 text-sm text-red-500">{String(state.error)}</p>
      )}
      <div className="mt-6 flex">
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={String(state.email)}
          placeholder="Email"
          aria-label="Email address"
          required
          autoComplete="off"
          data-1p-ignore
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-orange-900 focus:outline-none focus:ring-4 focus:ring-orange-700/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-orange-700 dark:focus:ring-orange-500/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          {pending ? "Joining..." : "Join"}
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
