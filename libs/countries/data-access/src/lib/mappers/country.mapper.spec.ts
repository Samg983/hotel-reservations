import { describe, expect, it } from 'vitest';
import { CountryMapper } from './country.mapper';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';
import { Country } from '../models/country.model';

describe('CountryMapper', () => {
  let countryMapper: CountryMapper;

  beforeEach(() => {
    countryMapper = new CountryMapper();
  });

  it('should map item to Country correctly', () => {
    const item = {
      display_code: 'US',
      id: 'guest_country-HK',
      value: { nr_of_rooms: 5, revenue: 200 },
      reference_value: { nr_of_rooms: 3, revenue: 10000 },
    };

    const expectedCountry: Country = {
      displayCode: 'US',
      name: COUNTRY_CODE_MAPPING['US'] || 'Unknown',
      id: 'guest_country-HK',
      value: { nrOfRooms: 5, revenue: 200 },
      referenceValue: { nrOfRooms: 3, revenue: 10000 },
    };

    const result = countryMapper.map(item);

    expect(result).toEqual(expectedCountry);
  });

  it('should return "Unknown" for countryName if display_code is not in COUNTRY_CODE_MAPPING', () => {
    const item = {
      display_code: 'XX',
      id: 'guest_country-HK',
      value: { nr_of_rooms: 5, revenue: 200 },
      reference_value: { nr_of_rooms: 3, revenue: 10000 },
    };

    const expectedCountry: Country = {
      displayCode: 'XX',
      name: 'Unknown',
      id: 'guest_country-HK',
      value: { nrOfRooms: 5, revenue: 200 },
      referenceValue: { nrOfRooms: 3, revenue: 10000 },
    };

    const result = countryMapper.map(item);

    expect(result).toEqual(expectedCountry);
  });
});
