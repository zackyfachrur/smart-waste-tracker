export interface RankItem {
  name: string;
  sub: string;
  val: number;
  unit: string;
  color: string;
}

export interface WasteType {
  icon: string;
  name: string;
  pct: number;
  color: string;
  src: string;
}

export interface EduItem {
  icon: string;
  bg: string;
  title: string;
  desc: string;
  tag: string;
  tagType: "success" | "warning" | "danger";
}

export interface TimelineItem {
  year: string;
  text: string;
  color: string;
}

export interface TrendData {
  year: string;
  value: number;
}

export interface MetricCard {
  label: string;
  value: string;
  unit: string;
  delta: string;
  deltaType: "up" | "down";
}
