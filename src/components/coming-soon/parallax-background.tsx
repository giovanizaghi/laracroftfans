"use client";

import { motion, type MotionValue } from "framer-motion";

type ParallaxBackgroundProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export function ParallaxBackground({ x, y }: ParallaxBackgroundProps) {
  return (
    <motion.div
      id="hero-background"
      aria-hidden="true"
      className="absolute inset-0 scale-105"
      style={{ x, y }}
    />
  );
}
