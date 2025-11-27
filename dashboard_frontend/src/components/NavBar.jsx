import React from "react";
import { NavLink, Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * NavBar - Top navigation bar with app title and links.
 */
export default function NavBar() {
  const linkBase =
    "smooth px-3 py-2 rounded-lg text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
  const linkInactive = "text-gray-600 hover:text-primary hover:bg-primary/5";
  const linkActive = "text-primary bg-primary/10";

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-[var(--color-text)]"
          aria-label="Dashboard Home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
            D
          </span>
          <span className="text-lg font-semibold">Dashboard</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Settings
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
