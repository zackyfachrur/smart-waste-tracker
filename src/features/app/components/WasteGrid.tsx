import type { WasteType } from "../types/waste";

interface WasteGridProps {
  items: WasteType[];
}

export const WasteGrid: React.FC<WasteGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map((w, i) => (
        <div
          key={i}
          className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/60"
        >
          <span className="text-2xl mb-1.5" role="img" aria-label={w.name}>
            {w.icon}
          </span>
          <p className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-tight mb-1">
            {w.name}
          </p>
          <p
            className="text-lg font-semibold leading-none mb-0.5"
            style={{ color: w.color }}
          >
            {w.pct}%
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">{w.src}</p>
        </div>
      ))}
    </div>
  );
};
