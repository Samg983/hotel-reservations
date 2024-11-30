import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@hotel-reservations/ui';
import { Observable } from 'rxjs';
import {
  Country,
  CountryApiService,
} from '@hotel-reservations/countries/data-access';

@Component({
  selector: 'country-overview',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './country-overview.component.html',
  styleUrl: './country-overview.component.css',
})
export class CountryOverviewComponent {
  countries$: Observable<Country[]> | undefined;

  constructor(private countryApiService: CountryApiService) {}

  ngOnInit() {
    this.countries$ = this.countryApiService.getCountries();
  }
}
