import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@hotel-reservations/ui';
import { map, Observable, tap } from 'rxjs';
import { Country, CountryApiService, CountryUtil } from '@hotel-reservations/countries/data-access';

@Component({
  selector: 'country-overview',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './country-overview.component.html',
  styleUrl: './country-overview.component.css',
})
export class CountryOverviewComponent implements OnInit {
  countries$: Observable<Country[]> | undefined;
  maxNrOfReservations = 0;

  constructor(private countryApiService: CountryApiService) {}

  ngOnInit() {
    this.countries$ = this.countryApiService.getCountries().pipe(
      tap((countries) => {
        this.maxNrOfReservations = CountryUtil.getMaxNrOfReservations(countries);
      }),
      map((countries) => this.enrichCountries(countries)),
      map((countries) => this.sortCountries(countries))
    );
  }

  private enrichCountries(countries: Country[]): Country[] {
    return countries.map((country) => {
      return {
        ...country,
        progressbarValue: CountryUtil.getPercentage(country.value.nrOfRooms, this.maxNrOfReservations),
        evolution: CountryUtil.getEvolution(country.value.nrOfRooms, country.referenceValue.nrOfRooms),
      } as Country;
    });
  }

  private sortCountries(countries: Country[]): Country[] {
    return countries.sort((a, b) => {
      if (b.value.nrOfRooms !== a.value.nrOfRooms) {
        return b.value.nrOfRooms - a.value.nrOfRooms;
      }
      return b.evolution.difference - a.evolution.difference;
    });
  }
}
