import type { MetricCard } from "../types/waste";

interface MetricCardsProps {
  metrics: MetricCard[];
}

export const MetricCards: React.FC<MetricCardsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 lg:grid-cols-4">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="rounded-lg bg-white p-3 "
        >
          <p className="text-xs text-gray-900 font-bold mb-1">
            {m.label}
          </p>
          <p className="text-xl font-semibold text-lime-200 leading-none">
            {m.value}
          </p>
          <p className="text-xs text-white mt-0.5">
            {m.unit}
          </p>
          <p
            className={`text-xs mt-1 font-medium ${m.deltaType === "up"
              ? "text-red-500"
              : "text-emerald-600 dark:text-emerald-400"
              }`}
          >
            {m.delta}
          </p>
        </div>
      ))}
    </div>
  );
};
