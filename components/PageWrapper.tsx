"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-zinc-900 text-white min-h-dvh w-full flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-[1920px] flex-1 flex flex-col relative z-10 bg-opacity-80 font-oswald h-full">
        <Header
          isMenuOpen={isMenuOpen}
          onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <Menu key="menu" onClose={() => setIsMenuOpen(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col w-full h-full"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
