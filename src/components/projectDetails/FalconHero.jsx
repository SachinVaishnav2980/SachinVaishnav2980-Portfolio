import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import falconLogo from "/public/falcon-logo.png";

export const FalconHero = () => {
  const [stars, setStars] = useState([]);

  // Generate stars dynamically for background
  useEffect(() => {
    const newStars = Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <section className="relative overflow-hidden h-[80vh] flex flex-col justify-center items-center text-center bg-background text-foreground">
      {/* Animated background stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `pulse-subtle ${3 + star.delay}s ease-in-out infinite`,
          }}
        ></div>
      ))}

      {/* Shooting meteor */}
      <div className="meteor animate-meteor absolute top-10 left-1/2"></div>

      {/* Hero content */}
      <motion.div
        className="z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={falconLogo}
          alt="FALCON logo"
          className="mx-auto w-32 h-32 md:w-40 md:h-40 animate-float mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-primary text-glow mb-3">
          FALCON 🦅
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-4">
          <span className="font-semibold">Fall Alert Landslide Condition Observation Network</span>
        </p>
        <p className="text-sm md:text-base text-foreground/70 max-w-xl mx-auto mb-8">
          Advanced full-stack geospatial system for rockfall prediction, risk analysis,
          and route optimization powered by drone imagery and machine learning.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#details" className="cosmic-button">
            Explore Project
          </a>
          <a
            href="https://github.com/lakshya1410/FALCON"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View GitHub
          </a>
        </div>
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none"></div>
    </section>
  );
};

// export default FalconHero;
