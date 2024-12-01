import { CountryApi, Evolution } from '@hotel-reservations/countries/data-access';

export interface Country extends CountryApi {
  evolution: Evolution;
  progressbarValue?: number;
}
