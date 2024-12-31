export const ROUTES = {
  ABOUT: "/about",
  EXPERINECE: "/experience",
  HOME: "/",
  BLOG: "https://blog-chi-neon-82.vercel.app/",
  PROJECTS: "/projects",
  TOOLS: "/tools",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const KEYBOARD_SHORTCUTS: Record<Route, string> = {
  [ROUTES.ABOUT]: "a",
  [ROUTES.EXPERINECE]: "w",
  [ROUTES.HOME]: "h",
  [ROUTES.BLOG]: "b",
  [ROUTES.PROJECTS]: "p",
  [ROUTES.TOOLS]: "t",
} as const;

export type KeyboardShortcut =
  (typeof KEYBOARD_SHORTCUTS)[keyof typeof KEYBOARD_SHORTCUTS];
