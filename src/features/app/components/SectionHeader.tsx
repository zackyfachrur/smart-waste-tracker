import type { ReactNode } from "react";

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
}) => {
  return (
    <div className="mb-3 flex items-center gap-2 border-b border-gray-400  pb-2 ">
      <span className="text-base bg-lime-200 text-lime-500 px-2 py-1 rounded-xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <h2 className="text-sm font-medium text-gray-500 ">
        {title}
      </h2>
    </div>
  );
};
