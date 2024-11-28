import { Country } from '../models/country.model';

export const MOCK_COUNTRIES: Country[] = [
  {
    id: 'guest_country-BE',
    referenceValue: { nr_of_rooms: 100, revenue: 5000 },
    displayCode: 'BE',
    value: { nr_of_rooms: 70, revenue: 3500 },
  },
  {
    id: 'guest_country-DE',
    referenceValue: { nr_of_rooms: 120, revenue: 6000 },
    displayCode: 'DE',
    value: { nr_of_rooms: 80, revenue: 4000 },
  },
];
