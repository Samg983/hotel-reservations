import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { CountryApiService } from './country-api.service';
import { CountryMapper } from '../mappers/country.mapper';
import { CountryApi } from '../models/country.model';

describe('CountryApiService', () => {
  let countryApiService: CountryApiService;
  let httpClientMock: HttpClient;
  let countryMapperMock: CountryMapper;

  beforeEach(() => {
    httpClientMock = {
      get: vi.fn(),
    } as unknown as HttpClient;

    countryMapperMock = {
      map: vi.fn(),
    } as CountryMapper;

    countryApiService = new CountryApiService(httpClientMock, countryMapperMock);
  });

  it('should fetch and map countries correctly', (done) => {
    const apiResponse = {
      guest_country: [
        {
          display_code: 'US',
          id: 'guest_country-HK',
          value: { nr_of_rooms: 10, revenue: 1000 },
          reference_value: { nr_of_rooms: 5, revenue: 500 },
        },
      ],
    };

    const mappedCountry: CountryApi = {
      displayCode: 'US',
      name: 'United States',
      id: 'guest_country-HK',
      value: { nrOfRooms: 10, revenue: 1000 },
      referenceValue: { nrOfRooms: 5, revenue: 500 },
    };

    vi.spyOn(httpClientMock, 'get').mockReturnValue(of(apiResponse));
    vi.spyOn(countryMapperMock, 'map').mockReturnValue(mappedCountry);

    countryApiService.getCountries().subscribe((countries) => {
      expect(countries).toEqual([mappedCountry]);
      expect(httpClientMock.get).toHaveBeenCalledWith(countryApiService['apiUrl']);
      expect(countryMapperMock.map).toHaveBeenCalledWith(apiResponse.guest_country[0]);
    });
  });

  it('should handle errors correctly', (done) => {
    const errorResponse = new ErrorEvent('Network error');

    vi.spyOn(httpClientMock, 'get').mockReturnValue(throwError(() => new Error('Network error')));

    //todo check test

    countryApiService.getCountries().subscribe({
      next: (countries) => {
        expect(countries).toEqual([]);
      },
      error: (error) => {
        expect(error).toBe(errorResponse);
      },
    });
  });
});
