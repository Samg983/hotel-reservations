import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountryOverviewComponent } from '@hotel-reservations/feat-country-overview';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, CountryOverviewComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hotel-reservations';
}
