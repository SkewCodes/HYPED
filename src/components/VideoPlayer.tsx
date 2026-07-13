"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

export function VideoPlayer({ videoId, title, thumbnail }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-hyped-void">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-hyped-void"
      aria-label={`Play: ${title}`}
    >
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 bg-hyped-panel" />
      )}
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
            <path d="M4 2l18 12L4 26V2z" fill="#0A0A12" />
          </svg>
        </div>
      </div>
    </button>
  );
}
