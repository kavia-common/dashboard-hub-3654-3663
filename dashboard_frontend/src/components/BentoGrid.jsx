import React from "react";
import BentoCard from "./BentoCard";
// Use Heroicons v2: outline for primary card icons to match subtle Ocean Professional style
import {
  HomeModernIcon,
  RectangleGroupIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  CreditCardIcon,
  LifebuoyIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

/**
 * PUBLIC_INTERFACE
 * BentoGrid - Homepage grid of compact cards arranged in a non-uniform (bento) layout.
 * Layout goals:
 * - Mobile: simple 2-col stack, uniform tiles for readability.
 * - md+: masonry-like feel with featured tiles spanning rows/cols.
 * - Preserve routes/labels. Only change sizing/placement.
 */
export default function BentoGrid() {
  const iconClass = "h-4 w-4 text-primary";

  // Keep existing routes and labels
  const items = [
    {
      to: "/overview",
      title: "Overview",
      description: "High-level snapshot of your dashboard.",
      icon: (props) => <RectangleGroupIcon className={iconClass} aria-hidden="true" {...props} />,
      // Featured hero tile (2x2)
      className: "md:col-span-2 md:row-span-2"
    },
    {
      to: "/analytics",
      title: "Analytics",
      description: "Explore key metrics, trends, and performance insights.",
      icon: (props) => <ChartBarIcon className={iconClass} aria-hidden="true" {...props} />,
      // Tall spotlight tile (1x2)
      className: "md:row-span-2"
    },
    {
      to: "/team",
      title: "Team",
      description: "Manage members, roles, and access.",
      icon: (props) => <UsersIcon className={iconClass} aria-hidden="true" {...props} />,
      // Small tile (1x1)
      className: ""
    },
    {
      to: "/activity",
      title: "Activity",
      description: "Recent events and audit trail.",
      icon: (props) => <BoltIcon className={iconClass} aria-hidden="true" {...props} />,
      // Wide tile (2x1)
      className: "md:col-span-2"
    },
    {
      to: "/reports",
      title: "Reports",
      description: "Generate, download, and share detailed reports.",
      icon: (props) => <DocumentTextIcon className={iconClass} aria-hidden="true" {...props} />,
      // Small tile (1x1)
      className: ""
    },
    {
      to: "/profile",
      title: "Profile",
      description: "Manage your personal information and preferences.",
      icon: (props) => <HomeModernIcon className={iconClass} aria-hidden="true" {...props} />,
      // Ensure no gap above: keep as 1x1 so it tucks under neighbors
      className: ""
    },
    {
      to: "/settings",
      title: "Settings",
      description: "Configure application options and integrations.",
      icon: (props) => <Cog6ToothIcon className={iconClass} aria-hidden="true" {...props} />,
      // Wide tile (2x1)
      className: "md:col-span-2"
    },
    {
      to: "/billing",
      title: "Billing",
      description: "Plans, invoices, and payment methods.",
      icon: (props) => <CreditCardIcon className={iconClass} aria-hidden="true" {...props} />,
      // Small tile (1x1)
      className: ""
    },
    {
      to: "/notifications",
      title: "Notifications",
      description: "Configure alerts and preferences.",
      icon: (props) => <BellAlertIcon className={iconClass} aria-hidden="true" {...props} />,
      // Small tile (1x1)
      className: ""
    },
    {
      to: "/support",
      title: "Support",
      description: "Help center and contact options.",
      icon: (props) => <LifebuoyIcon className={iconClass} aria-hidden="true" {...props} />,
      // Small tile (1x1)
      className: ""
    }
  ];

  return (
    <ul
      role="list"
      aria-label="Quick access cards"
      // Responsive bento grid:
      // - 2 cols on mobile (simple)
      // - 4 cols on md+ to allow spanning
      // - auto-rows to support variable height via row-span utilities
      // Use a uniform small row height so row-span increments align tightly and avoid gaps.
      className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 auto-rows-[6.5rem] md:auto-rows-[6.5rem] lg:auto-rows-[7rem]"
    >
      {items.map((c) => (
        <div
          key={c.title}
          // Apply span classes only on md+ for masonry-like layout; simple on mobile
          className={`${c.className || ""} md:row-span-1`}
        >
          <BentoCard {...c} />
        </div>
      ))}
    </ul>
  );
}
