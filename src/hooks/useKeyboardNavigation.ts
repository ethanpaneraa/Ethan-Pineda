"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { KEYBOARD_SHORTCUTS } from "@/lib/constants/routes";

export function useKeyboardNavigation() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        event.target instanceof HTMLInputElement
      ) {
        return;
      }

      const key = event.key.toLowerCase();
      const routes = Object.entries(KEYBOARD_SHORTCUTS);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const matchedRoute = routes.find(([_, shortcut]) => shortcut === key);

      if (matchedRoute) {
        const [route] = matchedRoute;
        router.push(route);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);
}
