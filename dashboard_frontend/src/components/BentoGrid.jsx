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
 * BentoGrid - Homepage grid of compact square cards.
 */
export default function BentoGrid() {
  // Slightly smaller icons to fit compact square card layout
  const iconClass = "h-4 w-4 text-primary";

  // Keep existing routes and add new tiles with their own routes
  const cards = [
    {
      to: "/overview",
      title: "Overview",
      description: "High-level snapshot of your dashboard.",
      // Using RectangleGroup for a dashboard/overview feel
      icon: (props) => <RectangleGroupIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/team",
      title: "Team",
      description: "Manage members, roles, and access.",
      icon: (props) => <UsersIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/activity",
      title: "Activity",
      description: "Recent events and audit trail.",
      icon: (props) => <BoltIcon className={iconClass} aria-hidden="true" {...props} />
    },
    // Existing cards preserved
    {
      to: "/analytics",
      title: "Analytics",
      description: "Explore key metrics, trends, and performance insights.",
      icon: (props) => <ChartBarIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/reports",
      title: "Reports",
      description: "Generate, download, and share detailed reports.",
      icon: (props) => <DocumentTextIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/profile",
      title: "Profile",
      description: "Manage your personal information and preferences.",
      icon: (props) => <HomeModernIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/settings",
      title: "Settings",
      description: "Configure application options and integrations.",
      icon: (props) => <Cog6ToothIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/billing",
      title: "Billing",
      description: "Plans, invoices, and payment methods.",
      icon: (props) => <CreditCardIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/notifications",
      title: "Notifications",
      description: "Configure alerts and preferences.",
      icon: (props) => <BellAlertIcon className={iconClass} aria-hidden="true" {...props} />
    },
    {
      to: "/support",
      title: "Support",
      description: "Help center and contact options.",
      icon: (props) => <LifebuoyIcon className={iconClass} aria-hidden="true" {...props} />
    }
  ];

  return (
    <ul
      role="list"
      // Tightened gaps and responsive columns: 2 on small, 3 on md, 4 on lg+
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3"
    >
      {cards.map((c) => (
        <BentoCard key={c.title} {...c} />
      ))}
    </ul>
  );
}
