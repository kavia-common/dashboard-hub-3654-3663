import React from "react";

/**
 * PUBLIC_INTERFACE
 * Profile page - placeholder content
 */
export default function Profile() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Profile</h1>
      <p className="mt-2 text-gray-600">
        Manage your personal information and preferences.
      </p>

      <form
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-xl shadow-subtle border border-gray-200"
        aria-label="Profile form"
      >
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">First name</span>
          <input
            type="text"
            className="rounded-lg border border-gray-300 px-3 py-2 smooth focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:border-primary"
            placeholder="Jane"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Last name</span>
          <input
            type="text"
            className="rounded-lg border border-gray-300 px-3 py-2 smooth focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:border-primary"
            placeholder="Doe"
          />
        </label>
        <label className="flex flex-col gap-1 sm:col-span-2">
          <span className="text-sm text-gray-700">Email</span>
          <input
            type="email"
            className="rounded-lg border border-gray-300 px-3 py-2 smooth focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:border-primary"
            placeholder="jane@example.com"
          />
        </label>
        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 font-medium smooth hover:bg-primary/90 focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          Save changes
        </button>
      </form>
    </section>
  );
}
