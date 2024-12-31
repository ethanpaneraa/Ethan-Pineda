import { TechnologyCardProps } from "./types";
import { CardWrapper } from "./card-wrapper";

export function TechnologyCard({
  title,
  description,
  icon: Icon,
  link,
}: TechnologyCardProps) {
  return (
    <CardWrapper link={link}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-white group-hover:text-textAccent transition-colors">
          {title}
        </h3>
        <div className="text-gray-400 group-hover:text-textAccent transition-colors">
          <Icon size={20} />
        </div>
      </div>
      <div className="text-gray-300 space-y-0.5">
        {description.split(", ").map((tech, index) => (
          <div key={index} className="text-sm">
            <span className="text-xs">■</span> {tech.toLowerCase()}
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
