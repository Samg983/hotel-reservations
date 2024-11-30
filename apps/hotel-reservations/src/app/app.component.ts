import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryApiService } from '../../../../libs/countries/data-access/src';
import { CommonModule } from '@angular/common';
import { Country } from '../../../../libs/countries/data-access/src/lib/models/country.model';
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
