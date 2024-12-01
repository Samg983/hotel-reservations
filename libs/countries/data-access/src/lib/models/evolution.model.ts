export interface Evolution {
  difference: number;
  trend: Trend;
}

export enum Trend {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  NEUTRAL = 'neutral',
}
