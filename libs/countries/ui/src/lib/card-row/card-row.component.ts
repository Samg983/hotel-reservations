import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '@hotel-reservations/countries/data-access';

@Component({
  selector: 'card-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-row.component.html',
  styleUrl: './card-row.component.scss',
})
export class CardRowComponent {
  @Input() country!: Country;

  colorVariants: { [key: string]: string } = {
    positive: 'text-green-600 text-sm',
    negative: 'text-red-500 text-sm',
    neutral: 'text-gray-500 text-sm',
  };

  get plusSign(): string {
    return this.country.evolution.difference >= 0 ? '+' : '';
  }
}
