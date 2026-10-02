"use client";

import { useEffect, useState } from "react";
import { AppleMarkPath } from "./apple-mark";

const INTRO_EXIT_DELAY = 1900;
const INTRO_REMOVE_DELAY = 2500;
const REDUCED_MOTION_EXIT_DELAY = 500;
const REDUCED_MOTION_REMOVE_DELAY = 650;

export function WelcomeOverlay() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const previousOverflow = document.body.style.overflow;
    const exitDelay = prefersReducedMotion
      ? REDUCED_MOTION_EXIT_DELAY
      : INTRO_EXIT_DELAY;
    const removeDelay = prefersReducedMotion
      ? REDUCED_MOTION_REMOVE_DELAY
      : INTRO_REMOVE_DELAY;

    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setIsLeaving(true), exitDelay);
    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = previousOverflow;
    }, removeDelay);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`welcome-overlay${isLeaving ? " welcome-overlay--leaving" : ""}`}
      role="status"
      aria-label="Hello. Welcome to Apple Product Lab."
    >
      <div className="welcome-overlay__glow" aria-hidden="true" />
      <div className="welcome-overlay__content" aria-hidden="true">
        <svg
          className="welcome-overlay__apple"
          viewBox="0 11 14 18"
          focusable="false"
        >
          <AppleMarkPath />
        </svg>

        <svg
          className="welcome-overlay__hello"
          viewBox="0 0 520 150"
          focusable="false"
        >
          <defs>
            <linearGradient id="hello-ink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.5" stopColor="#e8e8ed" />
              <stop offset="1" stopColor="#a9a9b0" />
            </linearGradient>
          </defs>
          <text
            className="welcome-overlay__hello-trace"
            x="260"
            y="108"
            textAnchor="middle"
          >
            Hello
          </text>
          <text
            className="welcome-overlay__hello-fill"
            x="260"
            y="108"
            textAnchor="middle"
          >
            Hello
          </text>
        </svg>
      </div>
    </div>
  );
}
