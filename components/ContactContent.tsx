"use client";

import { motion } from "motion/react";
import * as Icon from "@phosphor-icons/react";

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
            href="mailto:lukmanindroprakoso@gmail.com"
            className="text-4xl md:text-6xl font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors mt-8"
          >
            lukmanindroprakoso@gmail.com
          </a>

          <div className="flex gap-8 mt-12">
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
                className="text-lg md:text-xl font-light hover:bg-white/10 px-4 py-2 rounded-md underline-offset-4"
              >
                <social.icon className="inline-block w-6 h-6 md:w-8 md:h-8 mr-2" />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
