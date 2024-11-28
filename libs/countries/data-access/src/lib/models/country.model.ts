import { Metric } from './metric.model';

export interface Country {
  id: string;
  referenceValue: Metric
  displayCode: string;
  countryName?: string;
  value: Metric
}
