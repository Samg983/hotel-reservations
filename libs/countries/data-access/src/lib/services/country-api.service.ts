import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Country } from '../models/country.model';
import { MOCK_COUNTRIES } from '../assets/country.mock-data';
import { COUNTRY_CODE_MAPPING } from '../assets/country-mapping';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root', // Registers the service globally
})
export class CountryApiService {
  private readonly apiUrl =
    'https://data.otainsight.com/public-data/frontend-hiring/guest-country-sample.json';

  private http = inject(HttpClient);
  private countryAdapter = inject(CountryMapper);


  getCountries(): Observable<Country[]> {
    return this.http.get<{ guest_country: Country[] }>(this.apiUrl).pipe(
      map((response) => response.guest_country),
      map((countries) => this.enrichCountries(countries))
    );
  }

  private enrichCountries(countries: Country[]): Country[] {
    return countries.map(country => this.countryAdapter.map(country));
  }
}
