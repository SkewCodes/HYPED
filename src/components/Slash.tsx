interface SlashProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

// The committed HYPED mark: constructed double slash at 16.5°,
// second slash "maxxed" +33%. Never the keyboard character.
// Inherits color via currentColor (default text-hyped-cyan) so callers
// can override with `[&_path]:text-…` or a text-color class.
const sizes = {
  sm: "w-3.5 h-5",
  md: "w-6 h-8",
  lg: "w-9 h-12",
};

export function Slash({ className = "", size = "md" }: SlashProps) {
  return (
    <svg
      viewBox="0 0 26 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} text-hyped-cyan ${className}`}
      aria-hidden="true"
    >
      <path d="M7.1 10H9L1.9 34H0Z" fill="currentColor" />
      <path d="M23.5 2H26L16.5 34H14Z" fill="currentColor" />
    </svg>
  );
}
