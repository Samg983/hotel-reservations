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
  protected readonly Math = Math;
}
