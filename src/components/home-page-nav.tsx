"use client";

import { NavigationBar } from "@/components/ui/navigation-bar";

export default function HomePageNavigationBar() {
  return (
    <NavigationBar
      showAbout={true}
      linkClassName="hover:text-textAccent transition-colors duration-200"
    />
  );
}
