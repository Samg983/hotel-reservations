import { Metric } from './metric.model';

export interface CountryApi {
  id: string;
  displayCode: string;
  name?: string;
  referenceValue: Metric;
  value: Metric;
}
