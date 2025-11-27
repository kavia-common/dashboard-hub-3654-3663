import React from "react";
import BackToHome from "./_BackToHome";

/**
 * PUBLIC_INTERFACE
 * Billing page - plans and invoices placeholder with Back to Home control.
 */
export default function Billing() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackToHome />
      <h1 className="text-2xl font-semibold text-[var(--color-text)]">Billing</h1>
      <p className="mt-2 text-gray-600">Plans, invoices, and payment methods.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <h2 className="font-medium text-gray-800">Current Plan</h2>
          <p className="mt-1 text-sm text-gray-600">Pro — $29 / month</p>
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 font-medium smooth hover:bg-primary/90 focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            Change plan
          </button>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-subtle border border-gray-200">
          <h2 className="font-medium text-gray-800">Payment Method</h2>
          <p className="mt-1 text-sm text-gray-600">•••• •••• •••• 1234</p>
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-lg border border-primary/30 text-primary px-4 py-2 font-medium smooth hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            Update card
          </button>
        </div>
      </div>
    </section>
  );
}
