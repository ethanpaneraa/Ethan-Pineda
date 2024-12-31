"use client";

import { NavigationLink } from "@/components/ui/navigation-link";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { ROUTES, KEYBOARD_SHORTCUTS } from "@/lib/constants/routes";

export default function HomePageNavigationBar() {
  useKeyboardNavigation();

  return (
    <nav
      className="flex items-center justify-between"
      aria-label="Main navigation"
    >
      <div className="flex space-x-4">
        <NavigationLink
          href={ROUTES.ABOUT}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.ABOUT]}
          label="about"
        />
        <NavigationLink
          href={ROUTES.HOME}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.HOME]}
          label="home"
        />
        <NavigationLink
          href={ROUTES.BLOG}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.BLOG]}
          label="blog"
          prefetch
        />
        <NavigationLink
          href={ROUTES.PROJECTS}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.PROJECTS]}
          label="projects"
        />
      </div>
    </nav>
  );
}
