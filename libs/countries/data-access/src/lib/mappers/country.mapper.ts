import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';
import { Metric } from '@hotel-reservations/countries/data-access';

export interface Mapper<T> {
  map(item: any): T;
}

@Injectable({
  providedIn: 'root',
})
export class CountryMapper implements Mapper<Country> {
  map(item: any): Country {
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
    } as Country;
  }
}
