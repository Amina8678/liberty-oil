export function OliveSprig({ className = "", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg
      viewBox="0 0 220 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 30c40-22 80-22 120 0s70 22 92 2"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {[18, 42, 66, 90, 114, 138, 162, 186].map((x, i) => (
        <ellipse
          key={x}
          cx={x}
          cy={i % 2 === 0 ? 22 : 38}
          rx="9"
          ry="5"
          transform={`rotate(${i % 2 === 0 ? -20 : 20} ${x} ${i % 2 === 0 ? 22 : 38})`}
          stroke={stroke}
          strokeWidth="1.1"
        />
      ))}
    </svg>
  );
}

export function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M-20 ${80 + i * 70}C 160 ${30 + i * 70}, 260 ${140 + i * 70}, 440 ${60 + i * 70}S 760 ${20 + i * 70}, 860 ${90 + i * 70}`}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.5 - i * 0.06}
        />
      ))}
    </svg>
  );
}
