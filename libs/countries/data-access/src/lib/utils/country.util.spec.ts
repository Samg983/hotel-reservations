import { describe, expect, it } from 'vitest';
import { CountryUtil } from './country.util';
import { Country, Trend } from '@hotel-reservations/countries/data-access';
import { MOCK_COUNTRIES } from '../assets/country.mock-data';

describe('CountryUtil', () => {
  describe('getMaxNrOfReservations', () => {
    it('should return the maximum number of reservations', () => {
      const result = CountryUtil.getMaxNrOfReservations(MOCK_COUNTRIES);
      expect(result).toBe(80);
    });

    it('should return 0 if no reservations are present', () => {
      const countries: Country[] = [
        {
          id: 'guest_country-BE',
          name: 'Belgium',
          referenceValue: { nrOfRooms: 100, revenue: 5000 },
          displayCode: 'BE',
          value: { nrOfRooms: 0, revenue: 3500 },
          evolution: { difference: 30, trend: Trend.POSITIVE },
        },
      ];
      const result = CountryUtil.getMaxNrOfReservations(countries);
      expect(result).toBe(0);
    });
  });

  describe('getPercentage', () => {
    it('should return the correct percentage', () => {
      const result = CountryUtil.getPercentage(50, 200);
      expect(result).toBe(25);
    });
  });

  describe('getDifference', () => {
    it('should return the correct difference', () => {
      const result = CountryUtil.getDifference(10, 5);
      expect(result).toBe(5);
    });
  });

  describe('getTrend', () => {
    it('should return POSITIVE for positive difference', () => {
      const result = CountryUtil.getTrend(5);
      expect(result).toBe(Trend.POSITIVE);
    });

    it('should return NEGATIVE for negative difference', () => {
      const result = CountryUtil.getTrend(-5);
      expect(result).toBe(Trend.NEGATIVE);
    });

    it('should return NEUTRAL for zero difference', () => {
      const result = CountryUtil.getTrend(0);
      expect(result).toBe(Trend.NEUTRAL);
    });
  });

  describe('getEvolution', () => {
    it('should return correct evolution for positive trend', () => {
      const result = CountryUtil.getEvolution(10, 5);
      expect(result).toEqual({ difference: 5, trend: Trend.POSITIVE });
    });

    it('should return correct evolution for negative trend', () => {
      const result = CountryUtil.getEvolution(5, 10);
      expect(result).toEqual({ difference: -5, trend: Trend.NEGATIVE });
    });

    it('should return correct evolution for neutral trend', () => {
      const result = CountryUtil.getEvolution(5, 5);
      expect(result).toEqual({ difference: 0, trend: Trend.NEUTRAL });
    });
  });
});
