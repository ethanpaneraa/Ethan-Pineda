"use client";

import { NavigationBar } from "@/components/ui/navigation-bar";

export function Navbar() {
  return (
    <NavigationBar
      className="flex items-center justify-between mb-6 text-sm py-8"
      linkClassName="hover:text-textAccent transition-colors duration-200"
    />
  );
}
