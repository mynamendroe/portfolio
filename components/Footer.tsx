"use client";

import Link from "next/link";
import * as Icon from "@phosphor-icons/react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.2, delay: 0 } }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      className="mb-16 flex flex-col items-center justify-center gap-4"
    >
      <div className="border w-[320px] rounded-md h-fit px-4 py-1 border-white flex items-center justify-between font-oswald gap-8">
        <Link
          href="/work"
          className="group text-md md:text-2xl flex items-center"
        >
          <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-[24px] md:group-hover:w-[48px] group-hover:mr-2 group-hover:opacity-100 block">
            <Icon.RocketIcon className="text-white min-w-[24px] md:min-w-[48px] w-[24px] h-[24px] md:w-[48px] md:h-[48px]" />
          </span>
          WORK
        </Link>
        ||
        <Link
          href="/contact"
          className="group text-md md:text-2xl flex items-center"
        >
          CONTACT
          <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:w-[24px] md:group-hover:w-[48px] group-hover:ml-2 group-hover:opacity-100 block">
            <Icon.EnvelopeIcon className="text-white min-w-[24px] md:min-w-[48px] w-[24px] h-[24px] md:w-[48px] md:h-[48px]" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
