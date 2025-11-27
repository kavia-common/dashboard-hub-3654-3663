import React from "react";
import BackToHome from "./_BackToHome";

/**
 * PUBLIC_INTERFACE
 * Support page - help center placeholder with Back to Home control.
 */
export default function Support() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackToHome />
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Support</h1>
      <p className="mt-2 text-gray-600">Help center and contact options.</p>
      <div className="mt-6 rounded-xl bg-white p-5 shadow-subtle border border-gray-200">
        <h2 className="font-medium text-gray-800">Get help</h2>
        <p className="mt-1 text-sm text-gray-600">
          Browse FAQs or reach out to our support team for assistance.
        </p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-primary/30 text-primary px-4 py-2 font-medium smooth hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            View FAQs
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-secondary text-white px-4 py-2 font-medium smooth hover:bg-secondary/90 focus-visible:ring-4 focus-visible:ring-secondary/40"
          >
            Contact support
          </button>
        </div>
      </div>
    </section>
  );
}
