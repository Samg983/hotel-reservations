import { MetricRaw } from './metric-raw.model';

export interface CountryRawApi {
  id: string;
  display_code: string;
  reference_value: MetricRaw;
  value: MetricRaw;
}
