"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { useState, useEffect, useRef } from "react";
import * as Icon from "@phosphor-icons/react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "DISCOVERY PROPERTY",
    description:
      "Custom property management ecosystem for a leading Indonesian agency, streamlining listing workflows and lead tracking through an intuitive Bubble dashboard.",
    tags: ["Bubble.io"],
    year: "2024",
    link: "https://discoveryproperty.id/",
    image: "/discoveryproperty.id_.png",
    currentWork: "Ongoing",
    background_color: "bg-red-950",
  },
  {
    id: "02",
    title: "OFISCHAT",
    description:
      "WhatsApp attendance system built with Next.js and n8n, enabling seamless clock-in/out and automated reporting without leaving the chat interface.",
    tags: ["Next.js", "Supabase", "n8n"],
    year: "2026",
    link: "https://ofischat.com/",
    image: "/ofischat.png",
    currentWork: "Selected Work",
    background_color: "bg-lime-950",
  },
  {
    id: "03",
    title: "PERSYON",
    description:
      "Privacy-focused memory assistant featuring a friction-less interface for storing critical snippets of information, designed to eliminate mental clutter and information overload.",
    tags: ["Bubble.io", "Google OAuth"],
    year: "2026",
    link: "https://persyon.com/",
    image: "/persyon.png",
    currentWork: "Selected Work",
    background_color: "bg-amber-950",
  },
  {
    id: "04",
    title: "QRAFTER ONE",
    description:
      "Integrated restaurant management ecosystem featuring dynamic digital menus, real-time table mapping, and a streamlined ordering pipeline for hospitality efficiency",
    tags: ["Bubble.io", "Xendit"],
    year: "2025",
    link: "https://qrafter.one/",
    image: "/qrafter.png",
    currentWork: "Selected Work",
    background_color: "bg-green-950",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 1, // Keep solid
    scale: 0.9,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: { type: "tween", duration: 0.8, ease: "easeInOut" },
      opacity: { duration: 0.2 },
      scale: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 1,
    scale: 0.9,
    transition: {
      y: { type: "tween", duration: 0.8, ease: "easeInOut" },
      opacity: { duration: 0.2 },
      scale: { duration: 0.4 },
    },
  }),
};

export function WorkContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const currentIndexRef = useRef(0);
  currentIndexRef.current = currentIndex;

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const idx = currentIndexRef.current;
      if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0 && idx < projects.length - 1) {
          isScrolling.current = true;
          setIsNavVisible(true);
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
          setTimeout(() => {
            isScrolling.current = false;
            setIsNavVisible(false);
          }, 1000);
        } else if (e.deltaY < 0 && idx > 0) {
          isScrolling.current = true;
          setIsNavVisible(true);
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
          setTimeout(() => {
            isScrolling.current = false;
            setIsNavVisible(false);
          }, 1000);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const idx = currentIndexRef.current;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && idx < projects.length - 1) {
          isScrolling.current = true;
          setIsNavVisible(true);
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
          setTimeout(() => {
            isScrolling.current = false;
            setIsNavVisible(false);
          }, 1000);
        } else if (diff < 0 && idx > 0) {
          isScrolling.current = true;
          setIsNavVisible(true);
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
          setTimeout(() => {
            isScrolling.current = false;
            setIsNavVisible(false);
          }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <div className="flex-1 w-full h-full overflow-hidden relative bg-zinc-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.section
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction === 0 ? "center" : "enter"}
          animate="center"
          exit="exit"
          className={`absolute inset-0 mx-5 mb-5 md:mx-8 rounded-4xl md:mb-8 flex justify-center items-center group overflow-hidden ${currentProject.background_color}`}
        >
          <div className="w-full h-full flex flex-col py-5 pl-5 pr-5 md:pl-8 md:pr-0 md:py-8">
            {/* Background ID Watermark */}
            <span className="absolute top-0 left-0 text-[40vw] font-bold text-white/2 pointer-events-none select-none leading-[0.75] z-0 transform-none">
              {currentProject.id}
            </span>

            <div className="relative h-full z-10 max-w-7xl w-full flex flex-col">
              {/* Header / Year */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 text-white/60 font-mono tracking-widest text-sm md:text-base uppercase"
              >
                <span>{currentProject.year}</span>
                <span className="w-12 h-px bg-white/30" />
                <span>{currentProject.currentWork}</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="text-6xl md:text-8xl lg:text-9xl mt-12 font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-white transition-all duration-500 cursor-default"
              >
                {currentProject.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-2xl mt-12 text-lg md:text-2xl font-light text-gray-300 font-sans leading-relaxed"
              >
                {currentProject.description}
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-start gap-3 mt-4"
              >
                {currentProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-white/20 rounded-full text-sm font-sans text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            <div>
              {/* CTA Button */}
              <motion.a
                href={currentProject.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                target="_blank"
                className="mt-8 group/btn relative flex items-center gap-3 text-xl font-bold uppercase tracking-widest hover:text-white/80 transition-colors"
              >
                Live Website
                <span className="p-2 rounded-full border border-white/30 group-hover/btn:border-white group-hover/btn:-rotate-45 transition-all duration-300">
                  <Icon.ArrowRightIcon size={20} />
                </span>
              </motion.a>
            </div>
          </div>
          <div className="w-full h-full flex-col justify-center items-center hidden md:flex">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              width={1200}
              height={800}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div
        className={`absolute right-6 md:right-14 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 transition-opacity duration-300 ${
          isNavVisible
            ? "opacity-100"
            : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
        }`}
      >
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Back to Top Button - Only visible on last project */}
      <AnimatePresence>
        {currentIndex === projects.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={() => {
              setDirection(-1);
              setCurrentIndex(0);
            }}
            className="absolute bottom-8 right-7 md:left-1/2 md:-translate-x-1/2 md:right-auto z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group/back cursor-pointer"
          >
            <span className="p-3 rounded-full border border-white/20 group-hover/back:border-white group-hover/back:bg-white/10 transition-all duration-300 bg-black/20 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
              <Icon.ArrowUpIcon size={20} />
            </span>
            <span className="hidden md:block text-xs mb-4 font-mono tracking-widest uppercase">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
