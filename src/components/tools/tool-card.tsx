interface ToolCardProps {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  link?: string;
}

export function ToolCard({
  title,
  description,
  category,
  icon,
  link,
}: ToolCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group border border-neutral-700 p-6 transition-colors hover:text-textAccent hover:border-neutral-600"
        >
          {children}
        </a>
      );
    }
    return (
      <div className="group border border-neutral-700 p-6 transition-colors hover:text-textAccent">
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-textAccent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{category}</p>
        </div>
        <div className="text-gray-400 group-hover:text-textAccent transition-colors">
          {icon}
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </CardWrapper>
  );
}
