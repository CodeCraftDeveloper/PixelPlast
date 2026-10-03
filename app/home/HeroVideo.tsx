"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";
const MOBILE_DEFER_MS = 3000;

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const [playable, setPlayable] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
    const timer = window.setTimeout(
      () => setPlayable(true),
      isDesktop ? 0 : MOBILE_DEFER_MS,
    );

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = videoRef.current;
    if (!playable || !element) return;

    const started = element.play();
    if (started) started.catch(() => undefined);
  }, [playable]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload={playable ? "auto" : "none"}
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      {playable ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}