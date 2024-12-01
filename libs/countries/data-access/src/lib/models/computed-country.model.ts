import { Country } from '@hotel-reservations/countries/data-access';

export interface ComputedCountry extends Country {
  progressbarValue?: number;
  evolution: { difference: number; className: string };
}
