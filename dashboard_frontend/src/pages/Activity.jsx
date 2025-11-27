import React from "react";
import BackToHome from "./_BackToHome";

/**
 * PUBLIC_INTERFACE
 * Activity page - recent events and audit trail placeholder with Back to Home control.
 */
export default function Activity() {
  const events = [
    "User Alex updated settings",
    "Report 'Weekly Summary' generated",
    "Billing info refreshed",
    "New member invited: Morgan",
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackToHome />
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Activity</h1>
      <p className="mt-2 text-gray-600">Recent events and audit trail.</p>
      <div className="mt-6 rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
        <ol className="space-y-2 list-decimal list-inside text-gray-800">
          {events.map((e, idx) => (
            <li key={`${e}-${idx}`} className="text-sm">
              {e}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
