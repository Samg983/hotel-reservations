import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private readonly apiUrl =
    'https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json';

  constructor(private http: HttpClient, private countryMapper: CountryMapper) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<{ guest_country: Country[] }>(this.apiUrl).pipe(
      map((response) => response.guest_country),
      map((countries) => this.enrichCountries(countries))
    );
  }

  private enrichCountries(countries: Country[]): Country[] {
    return countries.map((country) => this.countryMapper.map(country));
  }
}
