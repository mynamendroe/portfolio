"use client";

import Link from "next/link";
import * as Icon from "@phosphor-icons/react";
import { motion } from "motion/react";

interface MenuProps {
  onClose?: () => void;
}

export function Menu({ onClose }: MenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex-1 flex flex-col px-8 pb-8 pt-4 font-oswald bg-zinc-800 mx-5 md:mx-8 mt-4 mb-5 md:mb-8 rounded-4xl justify-between z-50"
    >
      <ul>
        <li className="group relative flex justify-between items-baseline py-4 border-b border-white/20">
          <Link
            href="/"
            className="text-4xl md:text-6xl lg:text-9xl font-semibold tracking-tighter flex items-center"
            onClick={onClose}
          >
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-[1.25em] group-hover:mr-6 group-hover:opacity-100 block">
              <Icon.HouseIcon className="text-white min-w-[1em] w-[1em] h-[1em]" />
            </span>
            HOME
          </Link>
          <p className="text-sm h-6 w-6 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-500 group-hover:scale-150 group-hover:rotate-12">
            1
          </p>
          <span className="absolute bottom-0 left-0 w-full h-px bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </li>
        <li className="group relative flex justify-between items-baseline py-4 border-b border-white/20">
          <Link
            href="/work"
            className="text-4xl md:text-6xl lg:text-9xl font-semibold tracking-tighter flex items-center"
            onClick={onClose}
          >
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-[1.25em] group-hover:mr-6 group-hover:opacity-100 block">
              <Icon.RocketIcon className="text-white min-w-[1em] w-[1em] h-[1em]" />
            </span>
            WORK
          </Link>
          <p className="text-sm h-6 w-6 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-500 group-hover:scale-150 group-hover:rotate-12">
            2
          </p>
          <span className="absolute bottom-0 left-0 w-full h-px bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </li>
        <li className="group relative flex justify-between items-baseline py-4 border-b border-white/20">
          <Link
            href="/contact"
            className="text-4xl md:text-6xl lg:text-9xl font-semibold tracking-tighter flex items-center"
            onClick={onClose}
          >
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-[1.25em] group-hover:mr-6 group-hover:opacity-100 block">
              <Icon.EnvelopeIcon className="text-white min-w-[1em] w-[1em] h-[1em]" />
            </span>
            CONTACT
          </Link>
          <p className="text-sm h-6 w-6 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-500 group-hover:scale-150 group-hover:rotate-12">
            3
          </p>
          <span className="absolute bottom-0 left-0 w-full h-px bg-white origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <p>Launched 2026</p>
        <p>By Lukman</p>
      </div>
    </motion.div>
  );
}
