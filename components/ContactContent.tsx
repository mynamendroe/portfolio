"use client";

import { motion } from "motion/react";

export function ContactContent() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center font-oswald p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl flex flex-col items-center text-center gap-12"
      >
        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4">
          LET'S TALK
        </h1>

        <div className="flex flex-col gap-6 items-center">
          <p className="text-xl md:text-2xl font-light font-sans max-w-2xl text-gray-300">
            Have a project in mind? Looking for a developer? Just want to say
            hi? I'd love to hear from you.
          </p>

          <a
            href="mailto:hello@lukman.dev"
            className="text-4xl md:text-6xl font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors mt-8"
          >
            hello@lukman.dev
          </a>

          <div className="flex gap-8 mt-12">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map(
              (social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg md:text-xl font-light hover:underline underline-offset-4"
                >
                  {social}
                </a>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
