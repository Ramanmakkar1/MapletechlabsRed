"use client";

import { useEffect } from "react";

/* Clarity hooks every click and scroll, so starting it during hydration made
   the first interactions slow (poor INP). Load it only after the page has
   finished loading and the browser is idle, and import the library lazily
   so it stays out of the first-load bundle. */
export default function ClarityAnalytics() {
  useEffect(() => {
    let cancelled = false;
    let idleId: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if (cancelled) return;
      import("@microsoft/clarity").then(({ default: Clarity }) => {
        if (!cancelled) Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID || "vw89eha0kr");
      });
    };
    const schedule = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(start, { timeout: 4000 });
      } else {
        timer = setTimeout(start, 2000);
      }
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, []);

  return null;
}
