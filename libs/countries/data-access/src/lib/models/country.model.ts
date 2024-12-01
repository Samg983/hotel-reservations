import { Evolution } from './evolution.model';
import { Metric } from './metric.model';

export interface Country {
  id: string;
  displayCode: string;
  name?: string;
  referenceValue: Metric;
  value: Metric;
  evolution: Evolution;
  progressbarValue?: number;
}
