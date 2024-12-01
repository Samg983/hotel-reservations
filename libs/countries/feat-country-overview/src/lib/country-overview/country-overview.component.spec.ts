import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CountryOverviewComponent } from './country-overview.component';
import { Country, CountryApiService, MOCK_COUNTRIES } from '@hotel-reservations/countries/data-access';
import { of } from 'rxjs';

describe('CountryOverviewComponent', () => {
  let component: CountryOverviewComponent;
  let countryApiService: CountryApiService;
  const mockCountries: Country[] = MOCK_COUNTRIES;

  beforeEach(() => {
    countryApiService = {
      getCountries: vi.fn(),
    } as unknown as CountryApiService;

    component = new CountryOverviewComponent(countryApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch countries on init', () => {
    vi.spyOn(countryApiService, 'getCountries').mockReturnValue(of(mockCountries));

    component.ngOnInit();

    component.countries$?.subscribe((countries) => {
      expect(countries.length).toBe(2);
    });
  });

  it('should sort countries correctly', () => {
    vi.spyOn(countryApiService, 'getCountries').mockReturnValue(of(mockCountries));

    component.ngOnInit();

    component.countries$?.subscribe((countries) => {
      expect(countries[0].displayCode).toBe('DE');
      expect(countries[1].displayCode).toBe('BE');
    });
  });
});
