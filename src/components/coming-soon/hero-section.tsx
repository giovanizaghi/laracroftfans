"use client";

import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { AtmosphericEffects } from "./atmospheric-effects";
import { LaraLayer } from "./lara-layer";
import { ParallaxBackground } from "./parallax-background";

type HeroSectionProps = {
  kicker: string;
  subtitle: string;
  instagramUrl: string;
  youtubeUrl: string;
  instagramLabel: string;
  youtubeLabel: string;
};

export function HeroSection({
  kicker,
  subtitle,
  instagramUrl,
  youtubeUrl,
  instagramLabel,
  youtubeLabel
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundX = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      prefersReducedMotion ? [0, 0] : [-10, 10]
    ),
    { stiffness: 80, damping: 24 }
  );
  const backgroundY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      prefersReducedMotion ? [0, 0] : [0, 90]
    ),
    { stiffness: 70, damping: 28 }
  );
  const laraX = useSpring(
    useTransform(
      mouseX,
      [-0.5, 0.5],
      prefersReducedMotion ? [0, 0] : [18, -18]
    ),
    { stiffness: 90, damping: 22 }
  );
  const laraY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      prefersReducedMotion ? [0, 0] : [0, 150]
    ),
    { stiffness: 70, damping: 26 }
  );
  const contentY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      prefersReducedMotion ? [0, 0] : [0, -42]
    ),
    { stiffness: 70, damping: 26 }
  );

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  const contentX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-8, 8]),
    { stiffness: 90, damping: 24 }
  );
  const contentMouseY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-6, 6]),
    { stiffness: 90, damping: 24 }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-screen scroll-mt-28 overflow-hidden bg-stone-950 text-stone-100"
      onMouseMove={handleMouseMove}
    >
      <ParallaxBackground x={backgroundX} y={backgroundY} />
      <AtmosphericEffects />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-center gap-10 px-5 py-24 sm:px-8 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-12 lg:px-10">
        <motion.div
          className="mx-auto max-w-3xl text-center md:mx-0 md:justify-self-center"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: contentX, y: contentY }}
        >
          <motion.div style={{ y: contentMouseY }}>
            <motion.p
              className="mb-5 text-xs font-semibold uppercase text-amber-200/80 sm:text-sm"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.12 }}
            >
              {kicker}
            </motion.p>
            <motion.h1
              className="mx-auto w-full max-w-[22rem] drop-shadow-[0_12px_34px_rgba(0,0,0,0.85)] sm:max-w-[30rem] md:max-w-[36rem]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.46, delay: 0.2 }}
            >
              <Image
                src="/images/lara-croft-fans-logo.png"
                alt="Lara Croft Fans"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 768px) 36rem, (min-width: 640px) 30rem, 22rem"
                className="h-auto w-full"
              />
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg md:text-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.38 }}
            >
              <a
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "w-full sm:w-auto"
                )}
                href={instagramUrl}
                aria-label={instagramLabel}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {instagramLabel}
              </a>
              <a
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full sm:w-auto"
                )}
                href={youtubeUrl}
                aria-label={youtubeLabel}
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
                {youtubeLabel}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative flex min-h-[24rem] items-end justify-center md:min-h-[40rem]">
          <LaraLayer x={laraX} y={laraY} />
        </div>
      </div>
    </section>
  );
}
