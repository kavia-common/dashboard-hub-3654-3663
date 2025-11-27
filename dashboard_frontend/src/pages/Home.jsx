import React from "react";
import BentoGrid from "../components/BentoGrid";

/**
 * PUBLIC_INTERFACE
 * Home page - Bento style grid
 */
export default function Home() {
  return (
    <main className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-50 pointer-events-none"
        aria-hidden="true"
      />
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        <header className="mb-5">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-text)]">
            Welcome back
          </h1>
          <p className="mt-1 text-gray-600">
            Navigate your dashboard using the quick access cards below.
          </p>
        </header>
        <BentoGrid />
      </section>
    </main>
  );
}
