import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Analytics page - placeholder content with a Back to Home control.
 */
export default function Analytics() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary rounded-lg px-3 py-2 hover:bg-primary/10 smooth focus-visible:ring-4 focus-visible:ring-primary/40"
          aria-label="Back to Home"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M11.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5A1 1 0 1111.707 5.707L8.414 9H17a1 1 0 110 2H8.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>
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
