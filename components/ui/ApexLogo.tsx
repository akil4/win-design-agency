interface ApexLogoProps {
  className?: string;
  accentColor?: string;
}

export function ApexLogo({ className = "w-7 h-7", accentColor = "#E10600" }: ApexLogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Precision Engineered "W" Monogram Chassis */}
      <path
        d="M2 7H8L12.5 19.5L16 11.5L19.5 19.5L24 7H30L24 26H18.5L16 19L13.5 26H8L2 7Z"
        fill="currentColor"
      />
      {/* Central Aero Speed Wedge */}
      <path
        d="M16 12.5L19 19H13L16 12.5Z"
        fill={accentColor}
      />
    </svg>
  );
}
