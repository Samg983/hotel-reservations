import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputedCountry } from '@hotel-reservations/countries/data-access';

@Component({
  selector: 'card-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-row.component.html',
  styleUrl: './card-row.component.scss',
})
export class CardRowComponent {
  @Input() country!: ComputedCountry;

  colorVariants = {
    green: 'text-green-600',
    red: 'text-red-500',
    gray: 'text-gray-500',
  };
}
