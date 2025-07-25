"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { unstable_ViewTransition as ViewTransition } from "react";

function usePrevious<T>(value: T) {
  const ref = useRef<T>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function ThemeWatcher() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      const systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    //onMediaChange();
    setTheme("dark");
    media.addEventListener("change", onMediaChange);

    console.debug("ThemeWatcher", { resolvedTheme });
    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}

export function ViewTransitionWrapper({
  children,
}: { children: React.ReactNode }) {
  const [shouldUseTransitions, setShouldUseTransitions] = useState(false);

  useEffect(() => {
    // Check if this is the initial page load in this session
    const hasNavigatedBefore = sessionStorage.getItem("has-navigated");

    if (hasNavigatedBefore) {
      // Not the first page load in this session, enable transitions
      setShouldUseTransitions(true);
    } else {
      // This is the initial page load, mark it and disable transitions for now
      sessionStorage.setItem("has-navigated", "true");
      setShouldUseTransitions(false);

      // Enable transitions for future navigations
      const timer = setTimeout(() => {
        setShouldUseTransitions(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // Only use ViewTransition when appropriate
  if (shouldUseTransitions) {
    return <ViewTransition>{children}</ViewTransition>;
  }

  // For initial load, render without ViewTransition
  return <>{children}</>;
}

export const AppContext = createContext<{ previousPathname?: string }>({});

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      {children}
    </AppContext.Provider>
  );
}
