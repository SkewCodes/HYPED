interface SlashProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-2 h-5",
  md: "w-3 h-8",
  lg: "w-4 h-12",
};

export function Slash({ className = "", size = "md" }: SlashProps) {
  return (
    <svg
      viewBox="0 0 12 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M9.5 0H12L2.5 32H0L9.5 0Z"
        fill="currentColor"
        className="text-hyped-cyan"
      />
    </svg>
  );
}
