import { Country } from '../models/country.model';

export const MOCK_COUNTRIES: Country[] = [
  {
    id: 'guest_country-BE',
    name: 'Belgium',
    referenceValue: { nrOfRooms: 100, revenue: 5000 },
    displayCode: 'BE',
    value: { nrOfRooms: 70, revenue: 3500 },
  },
  {
    id: 'guest_country-DE',
    name: 'Germany',
    referenceValue: { nrOfRooms: 120, revenue: 6000 },
    displayCode: 'DE',
    value: { nrOfRooms: 80, revenue: 4000 },
  },
];
