import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Reports page - placeholder content with a Back to Home control.
 */
export default function Reports() {
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
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Reports</h1>
      <p className="mt-2 text-gray-600">
        Generate and download reports. Placeholder list below.
      </p>

      <ul role="list" className="mt-6 space-y-3">
        {["Weekly Summary", "Monthly Performance", "Quarterly Insights"].map((r) => (
          <li
            key={r}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow-subtle border border-gray-200"
          >
            <span className="text-gray-800">{r}</span>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 text-primary px-3 py-1.5 smooth hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/40"
              aria-label={`Download ${r}`}
            >
              Download
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L9 8.586V3a1 1 0 112 0v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12zM3 14a1 1 0 100 2h14a1 1 0 100-2H3z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
