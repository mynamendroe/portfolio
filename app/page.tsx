"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PageWrapper } from "@/components/PageWrapper";

const LOADING_DURATION_MS = 3000;
let hasShownLandingLoader = false;

function LandingLoader({ progress }: { progress: number }) {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.4 }}
      className="min-h-dvh w-full flex items-center justify-center bg-zinc-900 text-white"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="text-5xl font-bold md:text-9xl font-oswald tracking-tight">
          {Math.round(progress)}
          <span className="text-base">%</span>
        </span>
        <div className="w-48 md:w-5xl h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => !hasShownLandingLoader);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    if (typeof window === "undefined") return;

    hasShownLandingLoader = true;

    let frame: number | undefined;
    let startTime: number | null = null;
    const duration = LOADING_DURATION_MS;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const next = Math.min(100, (elapsed / duration) * 100);
      setProgress(next);

      if (elapsed < duration) {
        frame = window.requestAnimationFrame(animate);
      } else {
        setIsLoading(false);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LandingLoader key="loader" progress={progress} />
      ) : (
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <PageWrapper>
            <Hero key="hero" />
            <Footer key="footer" />
          </PageWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
