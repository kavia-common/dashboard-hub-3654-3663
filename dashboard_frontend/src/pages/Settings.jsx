import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Settings page - placeholder content with a Back to Home control.
 */
export default function Settings() {
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
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Settings</h1>
      <p className="mt-2 text-gray-600">
        Configure application options and integrations.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <h2 className="font-medium text-gray-800">Theme</h2>
          <p className="mt-1 text-sm text-gray-600">Ocean Professional (default)</p>
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-secondary text-white px-3 py-1.5 font-medium smooth hover:bg-secondary/90 focus-visible:ring-4 focus-visible:ring-secondary/40"
          >
            Apply
          </button>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <h2 className="font-medium text-gray-800">Notifications</h2>
          <p className="mt-1 text-sm text-gray-600">Email and in-app alerts.</p>
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-1.5 font-medium smooth hover:bg-gray-50 focus-visible:ring-4 focus-visible:ring-primary/30"
          >
            Configure
          </button>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <h2 className="font-medium text-gray-800">Integrations</h2>
          <p className="mt-1 text-sm text-gray-600">Connect external services.</p>
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-lg border border-primary/30 text-primary px-3 py-1.5 font-medium smooth hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            Manage
          </button>
        </div>
      </div>
    </section>
  );
}
