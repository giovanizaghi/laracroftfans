"use client";

import { motion, type MotionValue } from "framer-motion";
import Image from "next/image";

type LaraLayerProps = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export function LaraLayer({ x, y }: LaraLayerProps) {
  return (
    <motion.div
      id="hero-lara"
      aria-hidden="true"
      className="relative mx-auto h-[17rem] w-[16rem] shrink-0 sm:h-[20rem] sm:w-[19rem] md:h-[28rem] md:w-[27rem] lg:h-[31rem] lg:w-[30rem]"
      style={{ x, y }}
    >
      <Image
        src="/images/lara-hero.png"
        alt=""
        width={638}
        height={666}
        priority
        sizes="(min-width: 1024px) 30rem, (min-width: 768px) 27rem, (min-width: 640px) 19rem, 16rem"
        className="h-full w-full object-contain object-bottom drop-shadow-[0_28px_42px_rgba(0,0,0,0.72)]"
      />
    </motion.div>
  );
}
