interface CardWrapperProps {
  children: React.ReactNode;
  link?: string;
}

export function CardWrapper({ children, link }: CardWrapperProps) {
  const baseClasses =
    "group border border-neutral-700 p-4 transition-colors hover:text-textAccent";

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} block hover:border-neutral-600`}
      >
        {children}
      </a>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}
