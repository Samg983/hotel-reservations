import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '@hotel-reservations/countries/data-access';

@Component({
  selector: 'country-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country!: Country;
  protected readonly Math = Math;
}
