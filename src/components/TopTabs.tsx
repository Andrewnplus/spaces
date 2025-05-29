"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/lib/nav";

export default function TopTabs() {
  const pathname = usePathname();
  return (
    <nav className="flex border-b bg-background px-4">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`mr-6 py-3 text-sm font-medium ${
              active
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
