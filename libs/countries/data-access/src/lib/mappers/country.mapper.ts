import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';

export interface Mapper<T> {
  map(item: any): T;
}

@Injectable({
  providedIn: 'root',
})
export class CountryMapper implements Mapper<Country> {
  map(item: any): Country {
    console.log('Mapping country', item);
    return {
      displayCode: item.display_code,
      countryName: COUNTRY_CODE_MAPPING[item.display_code] || 'Unknown',
      id: item.id,
      value: item.value,
      referenceValue: item.reference_value,
    } as Country;
  }
}
