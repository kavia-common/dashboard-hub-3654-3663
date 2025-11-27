import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * BentoCard - A compact interactive card used in the bento grid.
 * Applies Ocean Professional styling with polished interactions and accessibility.
 * The entire card is a single clickable element; no internal secondary CTAs.
 */
export default function BentoCard({ to, title, description, icon: Icon }) {
  return (
    <li className="h-full w-full">
      <Link
        to={to}
        aria-label={`${title} page`}
        className="group relative flex h-full w-full flex-col rounded-2xl bg-surface border border-gray-200/70 shadow-lg hover:shadow-xl transition-all duration-200 ease-out hover:scale-[1.01] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]/70"
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-amber-500/[0.03] to-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 group-hover:ring-[0.5px] group-hover:ring-primary/10 transition-all duration-200 ease-out" />

        {/* Content container uses flex-1 to fill available height; no extra internal fixed heights */}
        <div className="relative z-[1] flex-1 flex flex-col p-3.5 sm:p-4.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-[0.5px] ring-primary/10 transition-all duration-200 ease-out group-hover:bg-primary/15">
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : "🔹"}
            </span>
            <h3 className="text-sm sm:text-[0.95rem] font-semibold text-[var(--color-text)] leading-snug">
              {title}
            </h3>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-3 pr-0.5">
            {description}
          </p>
          {/* No "Open" button or secondary CTA to avoid extra vertical spacing */}
        </div>
      </Link>
    </li>
  );
}
