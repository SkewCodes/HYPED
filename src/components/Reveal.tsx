"use client";

import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export function Reveal({ children, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.15,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
