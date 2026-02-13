"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="flex-1 w-full flex flex-col items-center justify-center font-oswald h-full gap-3"
    >
      {[
        {
          text: "BUILD & SCALE",
          delay: 0.3,
          x: -100,
          skewX: -10,
        },
        { text: "BUBBLE.IO / NEXT.JS", delay: 0.5, x: 100, skewX: 10 },
        {
          text: "N8N AUTOMATION",
          delay: 0.7,
          x: -100,
          skewX: -10,
        },
      ].map((item, index) => (
        <motion.h1
          key={index}
          initial={{
            opacity: 0,
            x: item.x,
            skewX: item.skewX,
            filter: "blur(0px)",
            scale: 1,
          }}
          animate={{
            opacity: 1,
            x: 0,
            skewX: 0,
            filter: hoveredIndex === index ? "blur(6px)" : "blur(0px)",
            scale: hoveredIndex === index ? 1.05 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1],
            delay: item.delay,
            filter: { duration: 0.2, ease: "easeOut", delay: 0 },
            scale: { duration: 0.2, ease: "easeOut", delay: 0 },
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="text-9xl font-oswald font-bold cursor-default transition-colors tracking-tight"
        >
          {item.text}
        </motion.h1>
      ))}
    </motion.div>
  );
}
