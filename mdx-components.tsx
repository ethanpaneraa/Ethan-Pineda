// mdx-components.tsx
// This is required in the /app folder for MDX to work with the App Router
import type { MDXComponents } from 'mdx/types'

const CustomHeadings: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h1 className="text-4xl font-bold text-blue-600" {...props} />
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: CustomHeadings,
    ...components,
  }
}