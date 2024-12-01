import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputedCountry } from '@hotel-reservations/countries/data-access';
import { CardRowComponent } from '../card-row/card-row.component';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule, CardRowComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() title = 'Guest Country';
  @Input() items: ComputedCountry[] = [];
}
