import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * BentoCard - A compact interactive card used in the bento grid.
 * Applies Ocean Professional styling with polished interactions and accessibility.
 */
export default function BentoCard({ to, title, description, icon: Icon }) {
  return (
    <li className="h-full w-full">
      <Link
        to={to}
        aria-label={`${title} page`}
        className="group relative flex h-full w-full min-h-[6.5rem] sm:min-h-[6.5rem] flex-col rounded-2xl bg-surface border border-gray-200/70 shadow-lg hover:shadow-xl transition-all duration-200 ease-out hover:scale-[1.01] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]/70"
      >
        {/* Gradient overlay with primary/secondary accents */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-amber-500/[0.03] to-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out" />

        {/* Subtle corner highlight ring on hover to add depth */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 group-hover:ring-[0.5px] group-hover:ring-primary/10 transition-all duration-200 ease-out" />

        <div className="relative z-[1] flex-1 flex flex-col p-3.5 sm:p-4.5">
          {/* Header area: icon + title */}
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-[0.5px] ring-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15">
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : "🔹"}
            </span>
            <h3 className="text-sm sm:text-[0.95rem] font-semibold text-[var(--color-text)] leading-snug">
              {title}
            </h3>
          </div>

          {/* Description with balanced spacing */}
          <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-3 pr-0.5">
            {description}
          </p>

          {/* Footer CTA */}
          <span className="mt-auto pt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary">
            Open
            <svg
              className="h-3.5 w-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200 ease-out"
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
