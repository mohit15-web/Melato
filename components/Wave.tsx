"use client";

// Wavy purple divider, à la Corner House. `flip` points the wave the other way.
export default function Wave({
  color = "#5b2d8e",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full leading-[0] ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="w-full h-[70px] md:h-[120px] block"
      >
        <path
          fill={color}
          d="M0,64 C240,140 480,10 720,54 C960,98 1200,140 1440,72 L1440,140 L0,140 Z"
        />
      </svg>
    </div>
  );
}
