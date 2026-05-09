import type { EduItem } from "../types/waste";

interface EduCardProps {
  item: EduItem;
}

const tagColors: Record<EduItem["tagType"], string> = {
  success:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  warning:
    "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  danger: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
};

export const EduCard: React.FC<EduCardProps> = ({ item }) => {
  return (
    <div className="flex gap-3 bg-white text-start rounded-lg border border-gray-100 p-3 cursor-pointer hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/60">
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-lg"
        style={{ backgroundColor: item.bg }}
        role="img"
        aria-label={item.title}
      >
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {item.title}
        </p>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          {item.desc}
        </p>
        <span
          className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${tagColors[item.tagType]
            }`}
        >
          {item.tag}
        </span>
      </div>
    </div>
  );
};
