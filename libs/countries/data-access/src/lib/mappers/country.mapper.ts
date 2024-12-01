import { Injectable } from '@angular/core';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';
import { Country, Evolution, Metric, Trend } from '@hotel-reservations/countries/data-access';
import { CountryRawApi } from '../models/country-api-raw.model';

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
