import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { useTheme } from "../context/ThemeContext";

const ParticleBackground = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  // Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Set color based on theme
  const particleColor = theme === "dark" ? "#ffffff" : "#334155";

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 150,
            links: { opacity: 0.5, color: particleColor },
          },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 50,
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [particleColor]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute inset-0 w-full h-full z-[-1] pointer-events-none"
        options={particlesOptions}
      />
    );
  }

  return <></>;
};

export default ParticleBackground;