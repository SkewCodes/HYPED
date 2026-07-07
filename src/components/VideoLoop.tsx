"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import type { MediaAsset } from "@/content/products";

interface VideoLoopProps {
  asset: MediaAsset;
  playMode: "always" | "inview" | "hover";
  dim?: number;
  className?: string;
}

export function VideoLoop({ asset, playMode, dim, className = "" }: VideoLoopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: containerRef, inView } = useInView<HTMLDivElement>({
    threshold: 0.35,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    if (playMode === "always") {
      video.play().catch(() => {});
    } else if (playMode === "inview") {
      if (inView) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [inView, playMode]);

  const handlePointerEnter = () => {
    if (playMode !== "hover") return;
    const video = videoRef.current;
    if (!video) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    video.play().catch(() => {});
  };

  const handlePointerLeave = () => {
    if (playMode !== "hover") return;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: asset.aspect }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="metadata"
        poster={asset.poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={asset.webm} type="video/webm" />
        <source src={asset.mp4} type="video/mp4" />
      </video>
      <img
        src={asset.poster}
        alt=""
        className="poster-fallback absolute inset-0 h-full w-full object-cover"
      />
      {dim !== undefined && dim > 0 && (
        <div
          className="absolute inset-0 bg-hyped-black"
          style={{ opacity: dim / 100 }}
        />
      )}
    </div>
  );
}
