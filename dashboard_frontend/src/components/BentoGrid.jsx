import React from "react";
import BentoCard from "./BentoCard";

/**
 * Simple inline icons to avoid external libraries
 */
const AnalyticsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary" {...props}>
    <path d="M3 3a1 1 0 000 2h1v13a2 2 0 002 2h12a1 1 0 100-2H6a1 1 0 01-1-1V5h13a1 1 0 100-2H3z" />
    <path d="M9 11a1 1 0 011-1h1v6h-2v-5zM13 8h2v8h-2V8zM7 13h2v3H7v-3zM17 6h2v10h-2V6z" />
  </svg>
);
const ProfileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary" {...props}>
    <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
    <path d="M2 20a10 10 0 1120 0v1H2v-1z" />
  </svg>
);
const ReportsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary" {...props}>
    <path d="M6 2a2 2 0 00-2 2v16l6-3 6 3V4a2 2 0 00-2-2H6z" />
  </svg>
);
const SettingsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary" {...props}>
    <path d="M19.14 12.936a7.963 7.963 0 000-1.872l2.036-1.58a1 1 0 00.242-1.31l-1.928-3.34a1 1 0 00-1.204-.46l-2.397.96a7.994 7.994 0 00-1.62-.94l-.36-2.54A1 1 0 0012 0h-4a1 1 0 00-.99.84l-.36 2.54a7.993 7.993 0 00-1.62.94l-2.398-.96a1 1 0 00-1.204.46l-1.928 3.34a1 1 0 00.242 1.31l2.036 1.58a7.963 7.963 0 000 1.872l-2.036 1.58a1 1 0 00-.242 1.31l1.928 3.34a1 1 0 001.204.46l2.398-.96c.5.38 1.05.695 1.62.94l.36 2.54A1 1 0 008 24h4a1 1 0 00.99-.84l.36-2.54c.57-.245 1.12-.56 1.62-.94l2.397.96a1 1 0 001.204-.46l1.928-3.34a1 1 0 00-.242-1.31l-2.036-1.58zM10 15a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

/**
 * PUBLIC_INTERFACE
 * BentoGrid - Homepage grid of four square cards.
 */
export default function BentoGrid() {
  const cards = [
    {
      to: "/analytics",
      title: "Analytics",
      description: "Explore key metrics, trends, and performance insights.",
      icon: AnalyticsIcon
    },
    {
      to: "/profile",
      title: "Profile",
      description: "Manage your personal information and preferences.",
      icon: ProfileIcon
    },
    {
      to: "/reports",
      title: "Reports",
      description: "Generate, download, and share detailed reports.",
      icon: ReportsIcon
    },
    {
      to: "/settings",
      title: "Settings",
      description: "Configure application options and integrations.",
      icon: SettingsIcon
    }
  ];

  return (
    <ul
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
    >
      {cards.map((c) => (
        <BentoCard key={c.title} {...c} />
      ))}
    </ul>
  );
}
