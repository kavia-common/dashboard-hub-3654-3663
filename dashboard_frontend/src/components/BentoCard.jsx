import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * BentoCard - A square interactive card used in the bento grid.
 */
export default function BentoCard({ to, title, description, icon: Icon }) {
  return (
    <li className="aspect-square">
      <Link
        to={to}
        className="group relative flex h-full w-full flex-col rounded-xl bg-surface shadow-subtle hover:shadow-card border border-gray-200/70 p-5 smooth focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        aria-label={`${title} page`}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-gray-50 opacity-0 group-hover:opacity-100 smooth pointer-events-none" />
        <div className="flex-1 flex flex-col items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary smooth ring-1 ring-primary/10">
              {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : "🔹"}
            </span>
            <h3 className="text-base sm:text-lg font-semibold text-[var(--color-text)]">
              {title}
            </h3>
          </div>
          <p className="mt-3 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Open
            <svg
              className="h-4 w-4 translate-x-0 group-hover:translate-x-0.5 smooth"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 6.414V16a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 114.293 8.293l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </Link>
    </li>
  );
}
