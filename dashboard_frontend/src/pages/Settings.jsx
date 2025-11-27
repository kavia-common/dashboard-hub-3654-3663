import React from "react";

/**
 * PUBLIC_INTERFACE
 * Settings page - placeholder content
 */
export default function Settings() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
