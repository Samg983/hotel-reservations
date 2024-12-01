import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@hotel-reservations/ui';
import { map, Observable, tap } from 'rxjs';
import {
  ComputedCountry,
  CountryApiService,
} from '@hotel-reservations/countries/data-access';
import { CountryUtil } from '../../../../data-access/src/lib/utils/country.util';

@Component({
  selector: 'country-overview',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './country-overview.component.html',
  styleUrl: './country-overview.component.css',
})
export class CountryOverviewComponent {
  countries$: Observable<ComputedCountry[]> | undefined;
  maxNrOfReservations = 0;

  constructor(private countryApiService: CountryApiService) {}

  ngOnInit() {
    this.countries$ = this.countryApiService.getCountries().pipe(
      tap((countries) => {
        this.maxNrOfReservations =
          CountryUtil.getMaxNrOfReservations(countries);
      }),
      map((countries) =>
        countries.map((country) => {
          return {
            ...country,
            progressbarValue: CountryUtil.getPercentage(
              country.value.nrOfRooms,
              this.maxNrOfReservations
            ),
            evolution: {
              difference:
                country.referenceValue.nrOfRooms - country.value.nrOfRooms,
              className:
                country.referenceValue.nrOfRooms - country.value.nrOfRooms > 0
                  ? 'green-600'
                  : 'red-500',
            },
          };
        })
      )
    );
  }
}
