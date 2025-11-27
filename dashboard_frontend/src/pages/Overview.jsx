import React from "react";
import BackToHome from "./_BackToHome";

/**
 * PUBLIC_INTERFACE
 * Overview page - dashboard snapshot placeholder with Back to Home control.
 */
export default function Overview() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackToHome />
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Overview</h1>
      <p className="mt-2 text-gray-600">
        High-level snapshot of your dashboard. Key summaries and highlights will appear here.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200"
          >
            <div
              className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-500/10 to-gray-50"
              aria-hidden="true"
            />
            <p className="mt-2 text-sm text-gray-600">Summary tile {i}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
