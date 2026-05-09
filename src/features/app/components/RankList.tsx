import type { RankItem } from "../types/waste";

interface RankListProps {
  items: RankItem[];
  formatter?: (val: number) => string;
}

const defaultFormatter = (val: number): string => {
  if (val >= 1000) return (val / 1000).toFixed(1) + "k";
  return val.toString();
};

export const RankList: React.FC<RankListProps> = ({
  items,
  formatter = defaultFormatter,
}) => {
  const max = items[0]?.val ?? 1;

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const barPct = Math.round((item.val / max) * 100);
        return (
          <div
            key={i}
            className="flex items-center gap-3 text-start rounded-lg border border-gray-100 bg-white px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/60"
          >
            <span
              className={`w-5 text-center text-sm font-semibold flex-shrink-0 ${i === 0 ? "text-red-500" : "text-gray-400 dark:text-gray-500"
                }`}
            >
              {i + 1}
            </span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {item.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {item.sub}
              </p>
            </div>

            <div className="w-20 flex-shrink-0">
              <div className="h-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
                <div
                  className="h-1.5 rounded-full transition-all"
                  style={{ width: `${barPct}%`, backgroundColor: item.color }}
                />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-right mt-1">
                {formatter(item.val)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
