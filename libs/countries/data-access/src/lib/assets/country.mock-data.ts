import { Country, Trend } from '@hotel-reservations/countries/data-access';

export const MOCK_COUNTRIES: Country[] = [
  {
    id: 'guest_country-BE',
    name: 'Belgium',
    referenceValue: { nrOfRooms: 100, revenue: 5000 },
    displayCode: 'BE',
    value: { nrOfRooms: 70, revenue: 3500 },
    evolution: { difference: 30, trend: Trend.POSITIVE },
  },
  {
    id: 'guest_country-DE',
    name: 'Germany',
    referenceValue: { nrOfRooms: 120, revenue: 6000 },
    displayCode: 'DE',
    value: { nrOfRooms: 80, revenue: 4000 },
    evolution: { difference: -5, trend: Trend.NEGATIVE },
  },
];
