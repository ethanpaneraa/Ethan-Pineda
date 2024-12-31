"use client";

import Link from "next/link";
import { Route, KeyboardShortcut } from "@/lib/constants/routes";

interface NavigationLinkProps {
  href: Route;
  shortcut: KeyboardShortcut;
  label: string;
  prefetch?: boolean;
  className?: string;
}

export function NavigationLink({
  href,
  shortcut,
  label,
  prefetch,
  className = "hover:text-textAccent transition-colors duration-200",
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      aria-label={`Navigate to ${label} page (keyboard shortcut: ${shortcut})`}
    >
      [{shortcut}] {label}
    </Link>
  );
}
