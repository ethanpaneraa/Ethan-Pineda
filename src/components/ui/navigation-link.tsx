"use client";
import Link from "next/link";
import type { Route, KeyboardShortcut } from "@/lib/constants/routes";

interface NavigationLinkProps {
  href: Route;
  shortcut: KeyboardShortcut;
  label: string;
  prefetch?: boolean;
}

export function NavigationLink({
  href,
  shortcut,
  label,
  prefetch,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="hover:text-textAccent transition-colors duration-200"
      aria-label={`Navigate to ${label} page (keyboard shortcut: ${shortcut})`}
    >
      [{shortcut}] {label}
    </Link>
  );
}
