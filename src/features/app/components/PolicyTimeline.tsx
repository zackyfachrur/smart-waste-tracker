import type { TimelineItem } from "../types/waste";

interface PolicyTimelineProps {
  items: TimelineItem[];
}

export const PolicyTimeline: React.FC<PolicyTimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-3 text-start">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl">
          <div className="flex flex-col items-center">
            <div
              className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {i < items.length - 1 && (
              <div className="mt-1 h-full w-px bg-gray-200 min-h-[1.5rem]" />
            )}
          </div>
          <div className="pb-1">
            <p className="text-xs text-gray-400  font-medium">
              {item.year}
            </p>
            <p className="text-sm text-gray-900  leading-snug mt-0.5">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
