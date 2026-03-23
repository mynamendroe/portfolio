"use client";

import { motion } from "motion/react";
import * as Icon from "@phosphor-icons/react";

export function ContactContent() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center font-oswald px-4 py-10 md:px-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl flex flex-col items-center text-center gap-10 md:gap-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2 md:mb-4 leading-tight">
          LET&apos;S TALK
        </h1>

        <div className="flex flex-col gap-6 items-center">
          <p className="text-base sm:text-lg md:text-2xl font-light font-sans max-w-2xl text-gray-300">
            Have a project in mind? Looking for a developer? Just want to say
            hi? I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:lukmanindroprakoso@gmail.com"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors mt-6 md:mt-8 break-words"
          >
            lukmanindroprakoso@gmail.com
          </a>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 md:mt-12 items-stretch sm:items-center">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/lukman-indro-prakoso/",
                icon: Icon.LinkedinLogoIcon,
              },
              {
                name: "GitHub",
                url: "https://github.com/mynamendroe",
                icon: Icon.GithubLogoIcon,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-light hover:bg-white/10 px-4 py-2 rounded-md underline-offset-4 min-w-[200px]"
              >
                <social.icon className="inline-block w-5 h-5 md:w-6 md:h-6" />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
