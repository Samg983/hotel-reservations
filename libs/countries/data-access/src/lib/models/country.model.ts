import { Metric } from './metric.model';

export interface Country {
  id: string;
  displayCode: string;
  countryName?: string;
  referenceValue: Metric;
  value: Metric;
}
