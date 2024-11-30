import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Country,
  CountryApiService,
} from '@hotel-reservations/countries/data-access';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hotel-reservations';
  countries$: Observable<Country[]> | undefined;

  constructor(private countryApiService: CountryApiService) {}

  ngOnInit() {
    this.countries$ = this.countryApiService.getCountries();
  }
}
