"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
  useEffect(() => {
    Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID || "vw89eha0kr");
  }, []);

  return null;
}
