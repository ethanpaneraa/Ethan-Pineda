"use client";

import { NavigationLink } from "@/components/ui/navigation-link";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { ROUTES, KEYBOARD_SHORTCUTS } from "@/lib/constants/routes";

interface NavigationBarProps {
  className?: string;
  linkClassName?: string;
  showAbout?: boolean;
}

export function NavigationBar({
  className = "flex items-center justify-between",
  linkClassName,
  showAbout = false,
}: NavigationBarProps) {
  useKeyboardNavigation();

  return (
    <nav className={className} aria-label="Main navigation">
      <div className="flex space-x-4">
        {showAbout && (
          <NavigationLink
            href={ROUTES.ABOUT}
            shortcut={KEYBOARD_SHORTCUTS[ROUTES.ABOUT]}
            label="about"
            className={linkClassName}
          />
        )}
        <NavigationLink
          href={ROUTES.HOME}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.HOME]}
          label="home"
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.BLOG}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.BLOG]}
          label="blog"
          prefetch
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.PROJECTS}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.PROJECTS]}
          label="projects"
          className={linkClassName}
        />
      </div>
    </nav>
  );
}
