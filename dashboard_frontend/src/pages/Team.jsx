import React from "react";
import BackToHome from "./_BackToHome";

/**
 * PUBLIC_INTERFACE
 * Team page - manage members placeholder with Back to Home control.
 */
export default function Team() {
  const members = ["Alex Johnson", "Taylor Smith", "Jordan Lee", "Morgan Brown"];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackToHome />
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Team</h1>
      <p className="mt-2 text-gray-600">Manage members, roles, and access.</p>
      <ul role="list" className="mt-6 space-y-3">
        {members.map((m) => (
          <li
            key={m}
            className="flex items-center justify-between rounded-xl bg-white p-4 shadow-subtle border border-gray-200"
          >
            <span className="text-gray-800">{m}</span>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 text-primary px-3 py-1.5 smooth hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              Manage
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
