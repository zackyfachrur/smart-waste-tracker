import { MetricCards } from "./MetricCards";
import { RankList } from "./RankList";
import { WasteGrid } from "./WasteGrid";
import { TrendChart } from "./TrendChart";
import { EduCard } from "./EduCard";
import { PolicyTimeline } from "./PolicyTimeline";
import { SectionHeader } from "./SectionHeader";
import {
  METRICS,
  BEACHES,
  RIVERS,
  CITIES,
  WASTE_TYPES,
  EDU_ITEMS,
  TIMELINE_ITEMS,
  TREND_DATA,
} from "../data/wasteData";

const fmtTon = (val: number): string => {
  if (val >= 1000) return `${(val / 1000).toFixed(1)}k ton`;
  return `${val} ton`;
};

export const WasteDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50  font-sans">
      {/* Hero Header */}
      <div className="border-b pt-32 sm:pt-8 text-end border-gray-100 bg-white px-8 py-8 dark:border-gray-700 dark:bg-gray-800">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Education Dashboard
        </p>
        <h1 className="mt-0.5 text-xl font-semibold  dark:text-white">
          Indonesia’s Waste Crisis
        </h1>
        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
          Data on polluted locations, waste types, and waste management education — 2024
        </p>
      </div>

      {/* Metric Cards */}
      <MetricCards metrics={METRICS} />

      <div className="space-y-6 px-4 pb-8">
        {/* Pantai Terkotor */}
        <section>
          <SectionHeader icon={<i className="ri-umbrella-line"></i>} title="Beaches with the Most Waste" />
          <RankList items={BEACHES} formatter={(v) => `${v} ton`} />
        </section>

        {/* Sungai Terkotor */}
        <section>
          <SectionHeader icon={<i className="ri-contrast-drop-line"></i>} title="Most Polluted Rivers" />
          <RankList items={RIVERS} formatter={fmtTon} />
        </section>

        {/* Kota Penghasil Sampah */}
        <section>
          <SectionHeader icon={<i className="ri-delete-bin-fill"></i>} title="Top Waste-Generating Cities" />
          <RankList items={CITIES} formatter={fmtTon} />
        </section>

        {/* Komposisi Sampah */}
        <section>
          <SectionHeader icon={<i className="ri-recycle-line"></i>} title="Waste Composition by Type" />
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
              Plastic is the most harmful
            </span>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Organic waste is the most abundant
            </span>
          </div>
          <WasteGrid items={WASTE_TYPES} />
        </section>

        {/* Tren Chart */}
        <section>
          <SectionHeader
            icon={<i className="ri-fire-fill"></i>}
            title="Plastic Waste to the Ocean Trend (thousand tons)"
          />
          <TrendChart data={TREND_DATA} />
        </section>

        {/* Edukasi & Tips */}
        <section>
          <SectionHeader icon={<i className="ri-file-marked-fill"></i>} title="Edukasi & Cara Pengelolaan" />
          <div className="mb-3 rounded-r-lg border-l-2 border-amber-400 bg-amber-50 px-3 py-2 dark:border-amber-500 dark:bg-amber-900/20">
            <p className="text-xs text-amber-700 dark:text-amber-400">
              💡 Sorting waste at home is the most effective step to reduce landfill waste
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {EDU_ITEMS.map((item, i) => (
              <EduCard key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Timeline Kebijakan */}
        <section>
          <SectionHeader icon={<i className="ri-spy-line"></i>} title="Waste Management Policies" />
          <PolicyTimeline items={TIMELINE_ITEMS} />
        </section>
      </div>
    </div>
  );
};
