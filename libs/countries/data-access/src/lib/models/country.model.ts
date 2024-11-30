import { Metric } from './metric.model';

export interface Country {
  id: string;
  displayCode: string;
  name?: string;
  referenceValue: Metric;
  value: Metric;
}
