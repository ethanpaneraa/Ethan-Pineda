"use client";

import { NavigationBar } from "@/components/ui/navigation-bar";

export function Navbar() {
  return (
    <NavigationBar
      className="flex items-center justify-between mb-12 text-sm"
      linkClassName="hover:text-accent transition-colors duration-200"
    />
  );
}
