import React from "react";

/**
 * PUBLIC_INTERFACE
 * Analytics page - placeholder content
 */
export default function Analytics() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Analytics</h1>
      <p className="mt-2 text-gray-600">
        Explore key metrics and trends. Placeholder content for charts and KPIs will go here.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <div className="h-40 w-full rounded-lg bg-gradient-to-br from-blue-500/10 to-gray-50" aria-hidden="true" />
          <p className="mt-3 text-sm text-gray-600">Chart placeholder</p>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <div className="h-40 w-full rounded-lg bg-gradient-to-br from-blue-500/10 to-gray-50" aria-hidden="true" />
          <p className="mt-3 text-sm text-gray-600">KPIs placeholder</p>
        </div>
      </div>
    </section>
  );
}
