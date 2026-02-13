"use client";

import { Button } from "@/components/ui/button";
import * as Icon from "@phosphor-icons/react";
import { motion } from "motion/react";
import Link from "next/link";

export function Header({
  onMenuClick,
  isMenuOpen,
}: {
  onMenuClick?: () => void;
  isMenuOpen?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-5 px-5 md:px-8 h-fit justify-between flex"
    >
      <Link href="/">
        <h1 className="text-4xl md:text-5xl font-bold font-oswald tracking-tight">
          LUKMAN
        </h1>
      </Link>
      <Button className="bg-white hover:bg-gray-100" onClick={onMenuClick}>
        {isMenuOpen ? (
          <Icon.XIcon className="text-black" size={32} />
        ) : (
          <Icon.ListIcon className="text-black" size={32} />
        )}
      </Button>
    </motion.div>
  );
}
