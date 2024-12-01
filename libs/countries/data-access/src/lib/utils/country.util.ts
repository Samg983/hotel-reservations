import { ComputedCountry } from '@hotel-reservations/countries/data-access';

export class CountryUtil {
  static getMaxNrOfReservations(countries: ComputedCountry[]): number {
    return Math.max(
      ...countries.map((country) => country.value.nrOfRooms || 0)
    );
  }

  static getPercentage(number: number, max: number): number {
    return Math.round((number / max) * 100);
  }
}
