import { Country, Evolution } from '@hotel-reservations/countries/data-access';

export interface ComputedCountry extends Country {
  evolution: Evolution;
  progressbarValue?: number;
}
