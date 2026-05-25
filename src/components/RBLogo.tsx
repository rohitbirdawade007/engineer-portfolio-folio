import { useEffect, useRef, useState } from "react";

interface RBLogoProps {
  size?: number;
  animated?: boolean;
  variant?: "full" | "icon";
}

const RBLogo = ({ size = 44, animated = true, variant = "icon" }: RBLogoProps) => {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 100);
    return () => clearTimeout(t);
  }, []);

  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.46;

  // Particles orbiting at various angles and radii
  const particles = [
    { angle: 0,   orbit: 0.44, radius: 0.028, color: "#8b5cf6", delay: 0,   dur: 6 },
    { angle: 90,  orbit: 0.44, radius: 0.020, color: "#10f0a0", delay: 0,   dur: 6 },
    { angle: 180, orbit: 0.44, radius: 0.028, color: "#f472b6", delay: 0,   dur: 6 },
    { angle: 270, orbit: 0.44, radius: 0.020, color: "#8b5cf6", delay: 0,   dur: 6 },
    { angle: 45,  orbit: 0.35, radius: 0.016, color: "#10f0a0", delay: 0,   dur: 4 },
    { angle: 225, orbit: 0.35, radius: 0.016, color: "#f472b6", delay: 0,   dur: 4 },
  ];

  const circumference = 2 * Math.PI * r;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: s * 0.22 }}>
      {/* ── SVG Emblem ── */}
      <svg
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          flexShrink: 0,
          transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), filter 0.4s ease",
          cursor: "pointer",
        }}
        className="rb-svg"
      >
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6">
              {animated && <animate attributeName="stop-color" values="#8b5cf6;#10f0a0;#f472b6;#8b5cf6" dur="5s" repeatCount="indefinite"/>}
            </stop>
            <stop offset="100%" stopColor="#10f0a0">
              {animated && <animate attributeName="stop-color" values="#10f0a0;#f472b6;#8b5cf6;#10f0a0" dur="5s" repeatCount="indefinite"/>}
            </stop>
          </linearGradient>

          <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6"/>
            <stop offset="100%" stopColor="#8b5cf6"/>
          </linearGradient>

          {/* Bloom glow */}
          <filter id="bloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={s * 0.04} result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          <filter id="softglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation={s * 0.08} result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Mask for clean letter interior */}
          <mask id="circMask">
            <circle cx={cx} cy={cy} r={r * 0.88} fill="white"/>
          </mask>
        </defs>

        {/* ── Background dark circle ── */}
        <circle cx={cx} cy={cy} r={r * 0.92}
          fill={`hsl(220 20% 8%)`}
          stroke="url(#g1)" strokeWidth={s * 0.012} strokeOpacity="0.4"/>

        {/* ── Subtle inner glow fill ── */}
        <circle cx={cx} cy={cy} r={r * 0.88} fill="url(#g1)" opacity="0.06"/>

        {/* ── Main spinning ring ── */}
        {animated ? (
          <circle cx={cx} cy={cy} r={r}
            stroke="url(#g1)" strokeWidth={s * 0.015}
            strokeDasharray={`${circumference * 0.35} ${circumference * 0.65}`}
            strokeLinecap="round"
            opacity="0.8">
            <animateTransform attributeName="transform" type="rotate"
              from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="4s" repeatCount="indefinite"/>
          </circle>
        ) : (
          <circle cx={cx} cy={cy} r={r}
            stroke="url(#g1)" strokeWidth={s * 0.015}
            strokeDasharray={`${circumference * 0.35} ${circumference * 0.65}`}
            strokeLinecap="round" opacity="0.8"/>
        )}

        {/* ── Counter-spin dashed ring ── */}
        {animated && (
          <circle cx={cx} cy={cy} r={r * 0.82}
            stroke="url(#g2)" strokeWidth={s * 0.008}
            strokeDasharray={`${s * 0.04} ${s * 0.12}`}
            opacity="0.3">
            <animateTransform attributeName="transform" type="rotate"
              from={`360 ${cx} ${cy}`} to={`0 ${cx} ${cy}`} dur="9s" repeatCount="indefinite"/>
          </circle>
        )}

        {/* ── Orbiting particles ── */}
        {animated && particles.map((p, i) => {
          const orbitR = s * p.orbit;
          const pr = s * p.radius;
          return (
            <circle key={i} cx={cx + orbitR} cy={cy} r={pr} fill={p.color} filter="url(#bloom)">
              <animateTransform attributeName="transform" type="rotate"
                from={`${p.angle} ${cx} ${cy}`} to={`${p.angle + 360} ${cx} ${cy}`}
                dur={`${p.dur}s`} repeatCount="indefinite"/>
            </circle>
          );
        })}

        {/* ── "R" — clean geometric letterform ── */}
        <g filter="url(#bloom)" mask="url(#circMask)">
          {/* R vertical stem */}
          <rect
            x={cx * 0.38} y={cy * 0.44}
            width={s * 0.068} height={s * 0.52}
            rx={s * 0.02}
            fill="url(#g1)"
            style={{
              transition: drawn ? "opacity 0.8s ease" : undefined,
              opacity: drawn ? 1 : 0,
            }}
          />
          {/* R top bowl - right half arc */}
          <path
            d={`
              M ${cx * 0.38 + s * 0.068} ${cy * 0.44}
              Q ${cx * 0.82} ${cy * 0.44}
                ${cx * 0.82} ${cy * 0.67}
              Q ${cx * 0.82} ${cy * 0.88}
                ${cx * 0.38 + s * 0.068} ${cy * 0.88}
            `}
            stroke="url(#g1)" strokeWidth={s * 0.068} fill="none"
            strokeLinecap="round"
            style={{ opacity: drawn ? 1 : 0, transition: drawn ? "opacity 0.8s 0.1s ease" : undefined }}
          />
          {/* R leg diagonal */}
          <line
            x1={cx * 0.38 + s * 0.068} y1={cy * 0.88}
            x2={cx * 0.82} y2={cy * 1.56}
            stroke="url(#g1)" strokeWidth={s * 0.068}
            strokeLinecap="round"
            style={{ opacity: drawn ? 1 : 0, transition: drawn ? "opacity 0.8s 0.2s ease" : undefined }}
          />
        </g>

        {/* ── "B" — clean geometric letterform ── */}
        <g filter="url(#bloom)" mask="url(#circMask)">
          {/* B vertical stem */}
          <rect
            x={cx * 1.06} y={cy * 0.44}
            width={s * 0.068} height={s * 0.52}
            rx={s * 0.02}
            fill="url(#g2)"
            style={{ opacity: drawn ? 1 : 0, transition: drawn ? "opacity 0.8s 0.3s ease" : undefined }}
          />
          {/* B top bowl */}
          <path
            d={`
              M ${cx * 1.06 + s * 0.068} ${cy * 0.44}
              Q ${cx * 1.54} ${cy * 0.44}
                ${cx * 1.54} ${cy * 0.66}
              Q ${cx * 1.54} ${cy * 0.88}
                ${cx * 1.06 + s * 0.068} ${cy * 0.88}
            `}
            stroke="url(#g2)" strokeWidth={s * 0.06} fill="none"
            strokeLinecap="round"
            style={{ opacity: drawn ? 1 : 0, transition: drawn ? "opacity 0.8s 0.4s ease" : undefined }}
          />
          {/* B bottom bowl — bigger */}
          <path
            d={`
              M ${cx * 1.06 + s * 0.068} ${cy * 0.88}
              Q ${cx * 1.62} ${cy * 0.88}
                ${cx * 1.62} ${cy * 1.12}
              Q ${cx * 1.62} ${cy * 1.36}
                ${cx * 1.06 + s * 0.068} ${cy * 1.36}
            `}
            stroke="url(#g2)" strokeWidth={s * 0.06} fill="none"
            strokeLinecap="round"
            style={{ opacity: drawn ? 1 : 0, transition: drawn ? "opacity 0.8s 0.5s ease" : undefined }}
          />
        </g>

        {/* ── Center connector dot ── */}
        <circle cx={cx} cy={cy} r={s * 0.028}
          fill="white" opacity="0.9" filter="url(#bloom)">
          {animated && (
            <>
              <animate attributeName="r" values={`${s*0.028};${s*0.044};${s*0.028}`} dur="2.4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite"/>
            </>
          )}
        </circle>

        {/* ── Tick marks at 12/3/6/9 o'clock ── */}
        {[0, 90, 180, 270].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = cx + Math.cos(rad) * r * 1.02;
          const y1 = cy + Math.sin(rad) * r * 1.02;
          const x2 = cx + Math.cos(rad) * r * 1.14;
          const y2 = cy + Math.sin(rad) * r * 1.14;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#g1)" strokeWidth={s * 0.012} strokeLinecap="round" opacity="0.5"/>
          );
        })}
      </svg>

      {/* ── Text (full variant only) ── */}
      {variant === "full" && (
        <div style={{ lineHeight: 1.1 }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: s * 0.42,
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #fff 40%, rgba(255,255,255,0.55))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Rohit
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 400,
            fontSize: s * 0.19,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            marginTop: s * 0.03,
          }}>
            Birdawade
          </div>
        </div>
      )}

      <style>{`
        .rb-svg:hover {
          transform: scale(1.1) rotate(-3deg);
          filter: drop-shadow(0 0 ${s * 0.18}px rgba(139,92,246,0.7));
        }
      `}</style>
    </div>
  );
};

export default RBLogo;
