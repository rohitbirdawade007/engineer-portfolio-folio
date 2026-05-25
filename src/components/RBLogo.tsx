import { useEffect, useRef } from "react";

interface RBLogoProps {
  size?: number;        // px
  animated?: boolean;
  variant?: "full" | "icon"; // full = RB + text, icon = just the emblem
}

const RBLogo = ({ size = 44, animated = true, variant = "icon" }: RBLogoProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="rb-logo-wrapper" style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      {/* ── The SVG Emblem ── */}
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Primary violet→teal gradient */}
          <linearGradient id="rbGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#10f0a0" />
          </linearGradient>

          {/* Warm gradient for secondary elements */}
          <linearGradient id="rbGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="rbGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle drop shadow */}
          <filter id="rbShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8b5cf6" floodOpacity="0.5" />
          </filter>

          {/* Clip for background shape */}
          <clipPath id="rbClip">
            <rect x="2" y="2" width="96" height="96" rx="22" />
          </clipPath>
        </defs>

        {/* ── Background rounded square ── */}
        <rect x="2" y="2" width="96" height="96" rx="22"
          fill="url(#rbGrad1)" opacity="0.12" />
        <rect x="2" y="2" width="96" height="96" rx="22"
          fill="none" stroke="url(#rbGrad1)" strokeWidth="1.5" opacity="0.5">
          {animated && (
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
          )}
        </rect>

        {/* ── Rotating outer ring ── */}
        {animated && (
          <circle cx="50" cy="50" r="46" fill="none"
            stroke="url(#rbGrad2)" strokeWidth="1" strokeDasharray="8 20" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate"
              from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
          </circle>
        )}

        {/* ── Corner accent dots ── */}
        <circle cx="16" cy="16" r="2.5" fill="url(#rbGrad2)" opacity="0.7">
          {animated && <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />}
        </circle>
        <circle cx="84" cy="84" r="2.5" fill="url(#rbGrad1)" opacity="0.7">
          {animated && <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" begin="1s" repeatCount="indefinite" />}
        </circle>

        {/* ── The "R" letterform ── */}
        <g filter="url(#rbGlow)">
          {/* R - vertical stem */}
          <rect x="20" y="24" width="6" height="52" rx="3" fill="url(#rbGrad1)" />
          {/* R - top bowl arch */}
          <path d="M26 24 Q50 24 50 37 Q50 50 26 50" fill="none"
            stroke="url(#rbGrad1)" strokeWidth="6" strokeLinecap="round" />
          {/* R - leg diagonal */}
          <line x1="26" y1="50" x2="50" y2="76"
            stroke="url(#rbGrad1)" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* ── The "B" letterform ── */}
        <g filter="url(#rbGlow)">
          {/* B - vertical stem */}
          <rect x="52" y="24" width="6" height="52" rx="3" fill="url(#rbGrad2)" />
          {/* B - top bowl */}
          <path d="M58 24 Q78 24 78 36 Q78 48 58 48" fill="none"
            stroke="url(#rbGrad2)" strokeWidth="5.5" strokeLinecap="round" />
          {/* B - bottom bowl (larger) */}
          <path d="M58 48 Q80 48 80 62 Q80 76 58 76" fill="none"
            stroke="url(#rbGrad2)" strokeWidth="5.5" strokeLinecap="round" />
        </g>

        {/* ── Center dot accent ── */}
        <circle cx="50" cy="50" r="3" fill="white" opacity="0.9">
          {animated && (
            <>
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite" />
            </>
          )}
        </circle>

        {/* ── Scan line animation ── */}
        {animated && (
          <rect x="2" y="2" width="96" height="2" rx="1" fill="url(#rbGrad1)" opacity="0.5" clipPath="url(#rbClip)">
            <animateTransform attributeName="transform" type="translate"
              from="0 0" to="0 96" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
          </rect>
        )}
      </svg>

      {/* ── Text part (only in "full" variant) ── */}
      {variant === "full" && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: size * 0.45,
            background: "linear-gradient(135deg, #8b5cf6, #10f0a0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.03em",
          }}>
            Rohit
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 400,
            fontSize: size * 0.22,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}>
            Birdawade
          </span>
        </div>
      )}

      <style>{`
        .rb-logo-wrapper {
          cursor: pointer;
        }
        .rb-logo-wrapper:hover svg rect:first-child {
          opacity: 0.22;
          transition: opacity 0.3s;
        }
        .rb-logo-wrapper svg {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.3s ease;
        }
        .rb-logo-wrapper:hover svg {
          transform: scale(1.06);
          filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.6));
        }
      `}</style>
    </div>
  );
};

export default RBLogo;
