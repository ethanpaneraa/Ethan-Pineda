export const ROUTES = {
  ABOUT: "/about",
  HOME: "/",
  BLOG: "/blog",
  PROJECTS: "/projects",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const KEYBOARD_SHORTCUTS: Record<Route, string> = {
  [ROUTES.ABOUT]: "a",
  [ROUTES.HOME]: "h",
  [ROUTES.BLOG]: "b",
  [ROUTES.PROJECTS]: "p",
} as const;

export type KeyboardShortcut =
  (typeof KEYBOARD_SHORTCUTS)[keyof typeof KEYBOARD_SHORTCUTS];
