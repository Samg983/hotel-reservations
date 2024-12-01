import { Country } from '../models/country.model';
import { Evolution, Trend } from '../models/evolution.model';

export class CountryUtil {
  static getMaxNrOfReservations(countries: Country[]): number {
    return Math.max(...countries.map((country) => country.value.nrOfRooms || 0));
  }

  static getPercentage(number: number, max: number): number {
    return Math.round((number / max) * 100);
  }

  static getDifference(number1: number, number2: number): number {
    return number1 - number2;
  }

  static getTrend(difference: number): Trend {
    switch (Math.sign(difference)) {
      case 1:
        return Trend.POSITIVE;
      case -1:
        return Trend.NEGATIVE;
      default:
        return Trend.NEUTRAL;
    }
  }

  static getEvolution(value: number, referenceValue: number): Evolution {
    const difference = CountryUtil.getDifference(value, referenceValue);
    const trend = CountryUtil.getTrend(difference);

    return {
      difference,
      trend,
    } as Evolution;
  }
}
