import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * BackToHome - small control to navigate to the homepage with ocean-themed focus/hover styles.
 */
export default function BackToHome() {
  return (
    <div className="mb-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary rounded-lg px-3 py-2 hover:bg-primary/10 smooth focus-visible:ring-4 focus-visible:ring-primary/40"
        aria-label="Back to Home"
      >
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M11.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5A1 1 0 1111.707 5.707L8.414 9H17a1 1 0 110 2H8.414l3.293 3.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </Link>
    </div>
  );
}
