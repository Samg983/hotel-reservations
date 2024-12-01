import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../models/country.model';
import { CountryRawApi } from '../models/country-api-raw.model';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private readonly apiUrl = 'https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json';

  constructor(private http: HttpClient, private countryMapper: CountryMapper) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<{ guest_country: CountryRawApi[] }>(this.apiUrl).pipe(
      map((response) => response.guest_country),
      map((countries) => this.enrichCountries(countries)),
      catchError((error) => {
        console.error('Error fetching countries:', error);
        return [];
      })
    );
  }

  private enrichCountries(countries: CountryRawApi[]): Country[] {
    return countries.map((country) => this.countryMapper.map(country));
  }
}
