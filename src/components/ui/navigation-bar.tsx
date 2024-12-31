"use client";

import { NavigationLink } from "@/components/ui/navigation-link";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { ROUTES, KEYBOARD_SHORTCUTS } from "@/lib/constants/routes";

interface NavigationBarProps {
  className?: string;
  linkClassName?: string;
}

export function NavigationBar({
  className = "flex items-center justify-between",
  linkClassName,
}: NavigationBarProps) {
  useKeyboardNavigation();

  return (
    <nav className={className} aria-label="Main navigation">
      <div className="flex space-x-4">
        <NavigationLink
          href={ROUTES.HOME}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.HOME]}
          label="home"
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.ABOUT}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.ABOUT]}
          label="about"
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.EXPERINECE}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.EXPERINECE]}
          label="experience"
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.PROJECTS}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.PROJECTS]}
          label="projects"
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.TOOLS}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.TOOLS]}
          label="tools"
          className={linkClassName}
        />
        <NavigationLink
          href={ROUTES.BLOG}
          shortcut={KEYBOARD_SHORTCUTS[ROUTES.BLOG]}
          label="blog"
          prefetch
          className={linkClassName}
        />
      </div>
    </nav>
  );
}
