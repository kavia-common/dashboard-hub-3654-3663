import React from "react";
import BentoCard from "./BentoCard";
// Use Heroicons v2: outline for primary card icons to match subtle Ocean Professional style
import {
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

/**
 * PUBLIC_INTERFACE
 * BentoGrid - Homepage grid of four square cards.
 */
export default function BentoGrid() {
  const iconClass = "h-5 w-5 text-primary"; // maintain size and theme color

  const cards = [
    {
      to: "/analytics",
      title: "Analytics",
      description: "Explore key metrics, trends, and performance insights.",
      icon: (props) => <ChartBarIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/profile",
      title: "Profile",
      description: "Manage your personal information and preferences.",
      icon: (props) => <UsersIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/reports",
      title: "Reports",
      description: "Generate, download, and share detailed reports.",
      icon: (props) => <DocumentTextIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/settings",
      title: "Settings",
      description: "Configure application options and integrations.",
      icon: (props) => <Cog6ToothIcon className={iconClass} aria-hidden="true" {...props} />
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
