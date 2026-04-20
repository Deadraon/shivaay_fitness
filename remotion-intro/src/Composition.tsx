import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

const ShivaayFitnessLogo: React.FC<{ opacity: number; scale: number }> = ({
  opacity,
  scale,
}) => {
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        textAlign: "center",
        color: "white",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "10px",
          textShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        SHIVAAY
        <span style={{ color: "#FF5722" }}> FITNESS</span>
      </h1>
      <p
        style={{
          fontSize: "40px",
          fontWeight: 300,
          marginTop: "10px",
          letterSpacing: "20px",
          textTransform: "uppercase",
          opacity: 0.8,
        }}
      >
        Elevate Your Game
      </p>
    </div>
  );
};

const ValueText: React.FC<{ text: string; frame: number; delay: number }> = ({
  text,
  frame,
  delay,
}) => {
  const config = useVideoConfig();
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame - delay, [0, 15], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <h2
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        color: "white",
        fontSize: "60px",
        fontWeight: 700,
        margin: "0 20px",
        fontFamily: "'Inter', sans-serif",
        textShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      {text}
    </h2>
  );
};

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Background animation (Ken Burns effect)
  const bgScale = interpolate(frame, [0, 150], [1, 1.1]);
  const bgTranslateX = interpolate(frame, [0, 150], [0, -20]);

  // Logo Reveal Animation
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const logoSpring = spring({
    frame: frame,
    fps,
    config: {
      damping: 12,
    },
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.8, 1]);

  // Transitions
  const logoExitOpacity = interpolate(frame, [50, 65], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const valuesEntranceOpacity = interpolate(frame, [65, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* Background Image */}
      <Img
        src={staticFile("gym_background.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${bgScale}) translateX(${bgTranslateX}px)`,
          filter: "brightness(0.6) blur(2px)",
        }}
      />

      {/* Vignette Overlay */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Scene 1: Logo Reveal */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: logoExitOpacity,
        }}
      >
        <ShivaayFitnessLogo opacity={logoOpacity} scale={logoScale} />
      </AbsoluteFill>

      {/* Scene 2: Values */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          opacity: valuesEntranceOpacity,
        }}
      >
        <ValueText text="STRENGTH." frame={frame} delay={70} />
        <ValueText text="PASSION." frame={frame} delay={85} />
        <ValueText text="RESULTS." frame={frame} delay={100} />
      </AbsoluteFill>

      {/* Final CTA Overlay */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: "100px",
          opacity: interpolate(frame, [120, 135], [0, 1], {
            extrapolateLeft: "clamp",
          }),
        }}
      >
        <div
          style={{
            backgroundColor: "#FF5722",
            color: "white",
            padding: "20px 60px",
            fontSize: "40px",
            fontWeight: 800,
            borderRadius: "50px",
            boxShadow: "0 10px 30px rgba(255, 87, 34, 0.4)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          JOIN THE REVOLUTION
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
