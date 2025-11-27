import React from "react";
import BentoCard from "./BentoCard";
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
 * Uses a fixed auto-rows baseline with explicit row/col spans to avoid gaps.
 * - sm: 2 columns, uniform tiles (no spans)
 * - md: 3 columns, featured tiles via spans
 * - lg: 4 columns, balanced featured tiles
 */
export default function BentoGrid() {
  const iconClass = "h-4 w-4 text-primary";

  // Layout strategy:
  // - Keep a constant baseline (7rem rows).
  // - Make Overview a 2x2 anchor.
  // - Place a tall Analytics near the start.
  // - Give Billing a 2-row span and arrange neighbors so no empty space sits above it.
  // - Avoid fixed heights in cards; they flex to fill the spans.
  const gridItems = [
    {
      key: "Overview",
      to: "/overview",
      title: "Overview",
      description: "High-level snapshot of your dashboard.",
      icon: (props) => <RectangleGroupIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "md:col-span-2 md:row-span-2",
        lg: "lg:col-span-2 lg:row-span-2",
      },
    },
    {
      key: "Analytics",
      to: "/analytics",
      title: "Analytics",
      description: "Explore key metrics, trends, and performance insights.",
      icon: (props) => <ChartBarIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "md:row-span-2",
        lg: "lg:row-span-2",
      },
    },
    // Move Billing up and make it tall to fill the vertical gap that previously appeared above it.
    {
      key: "Billing",
      to: "/billing",
      title: "Billing",
      description: "Plans, invoices, and payment methods.",
      icon: (props) => <CreditCardIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "md:row-span-2",
        lg: "lg:row-span-2",
      },
    },
    {
      key: "Team",
      to: "/team",
      title: "Team",
      description: "Manage members, roles, and access.",
      icon: (props) => <UsersIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "",
        lg: "",
      },
    },
    // Keep Activity wide to create a masonry-like stagger beneath the top anchors.
    {
      key: "Activity",
      to: "/activity",
      title: "Activity",
      description: "Recent events and audit trail.",
      icon: (props) => <BoltIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "md:col-span-2",
        lg: "lg:col-span-2",
      },
    },
    {
      key: "Reports",
      to: "/reports",
      title: "Reports",
      description: "Generate, download, and share detailed reports.",
      icon: (props) => <DocumentTextIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "",
        lg: "",
      },
    },
    {
      key: "Profile",
      to: "/profile",
      title: "Profile",
      description: "Manage your personal information and preferences.",
      icon: (props) => <HomeModernIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "",
        lg: "",
      },
    },
    {
      key: "Settings",
      to: "/settings",
      title: "Settings",
      description: "Configure application options and integrations.",
      icon: (props) => <Cog6ToothIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "md:col-span-2",
        lg: "lg:col-span-2",
      },
    },
    {
      key: "Notifications",
      to: "/notifications",
      title: "Notifications",
      description: "Configure alerts and preferences.",
      icon: (props) => <BellAlertIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "",
        lg: "",
      },
    },
    {
      key: "Support",
      to: "/support",
      title: "Support",
      description: "Help center and contact options.",
      icon: (props) => <LifebuoyIcon className={iconClass} aria-hidden="true" {...props} />,
      spans: {
        base: "",
        md: "",
        lg: "",
      },
    },
  ];

  // Helper to build className for each item per breakpoint
  const buildSpanClasses = (spans) =>
    [
      spans.base,
      spans.md,
      spans.lg,
      // Default to one baseline unit when not explicitly spanned
      "md:row-span-1",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <ul
      role="list"
      aria-label="Quick access cards"
      className="
        grid grid-cols-2
        md:grid-cols-3 lg:grid-cols-4
        gap-2 sm:gap-2.5
        auto-rows-[7rem] md:auto-rows-[7rem] lg:auto-rows-[7rem]
      "
    >
      {gridItems.map((item) => (
        <div key={item.key} className={buildSpanClasses(item.spans)}>
          <BentoCard
            to={item.to}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        </div>
      ))}
    </ul>
  );
}
