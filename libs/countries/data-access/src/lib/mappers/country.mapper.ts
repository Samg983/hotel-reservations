import { Injectable } from '@angular/core';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';
import { CountryRawApi } from '../models/country-api-raw.model';
import { Country } from '../models/country.model';
import { Evolution, Trend } from '../models/evolution.model';
import { Metric } from '../models/metric.model';

export interface Mapper<T> {
  map(item: any): T;
}

@Injectable({
  providedIn: 'root',
})
export class CountryMapper implements Mapper<Country> {
  map(item: CountryRawApi): Country {
    return {
      displayCode: item.display_code,
      name: COUNTRY_CODE_MAPPING[item.display_code] || 'Unknown',
      id: item.id,
      value: {
        nrOfRooms: item.value.nr_of_rooms,
        revenue: item.value.revenue,
      } as Metric,
      referenceValue: {
        nrOfRooms: item.reference_value.nr_of_rooms,
        revenue: item.reference_value.revenue,
      } as Metric,
      evolution: { difference: 0, trend: Trend.NEUTRAL } as Evolution,
    } as Country;
  }
}
