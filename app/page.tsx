"use client";

import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero key="hero" />
      <Footer key="footer" />
    </PageWrapper>
  );
}
