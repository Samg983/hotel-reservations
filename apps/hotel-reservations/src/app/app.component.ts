import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
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

  countryApiService = inject(CountryApiService);
  countries$: Observable<Country[]> | undefined;

  ngOnInit() {
    this.countries$ = this.countryApiService.getCountries();
  }
}
