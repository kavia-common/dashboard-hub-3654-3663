import React from "react";
import BackToHome from "./_BackToHome";

/**
 * PUBLIC_INTERFACE
 * Notifications page - configuration placeholder with Back to Home control.
 */
export default function Notifications() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackToHome />
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Notifications</h1>
      <p className="mt-2 text-gray-600">Configure alerts and preferences.</p>
      <form className="mt-6 grid grid-cols-1 gap-4 bg-white p-5 rounded-xl shadow-subtle border border-gray-200">
        <label className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" defaultChecked />
          <span className="text-sm text-gray-800">Email alerts</span>
        </label>
        <label className="flex items-center gap-3">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" defaultChecked />
          <span className="text-sm text-gray-800">In-app notifications</span>
        </label>
        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 font-medium smooth hover:bg-primary/90 focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          Save
        </button>
      </form>
    </section>
  );
}
