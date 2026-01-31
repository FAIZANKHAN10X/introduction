import type { CSSProperties } from "react";

type AmbientBackgroundProps = {
  /** Optional additional classNames for the wrapper */
  className?: string;
  /** Optional gradient/vignette layer */
  gradientStyle?: CSSProperties;
  /** Noise opacity (defaults match existing usage) */
  noiseOpacity?: number;
  /** If you need to disable noise for a specific section */
  withNoise?: boolean;
};

export default function AmbientBackground({
  className,
  gradientStyle,
  noiseOpacity = 0.06,
  withNoise = true,
}: AmbientBackgroundProps) {
  return (
    <>
      {gradientStyle ? (
        <div
          className={["pointer-events-none absolute inset-0", className]
            .filter(Boolean)
            .join(" ")}
          style={gradientStyle}
        />
      ) : null}

      {withNoise ? (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            opacity: noiseOpacity,
            backgroundImage:
              "url(https://grainy-gradients.vercel.app/noise.svg)",
          }}
        />
      ) : null}
    </>
  );
}
