import { Evolution, Metric } from '@hotel-reservations/countries/data-access';

export interface Country {
  id: string;
  displayCode: string;
  name?: string;
  referenceValue: Metric;
  value: Metric;
  evolution: Evolution;
  progressbarValue?: number;
}
