import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardRowComponent } from './card-row.component';
import { Trend } from '@hotel-reservations/countries/data-access';

describe('CardRowComponent', () => {
  let component: CardRowComponent;
  let fixture: ComponentFixture<CardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardRowComponent);
    component = fixture.componentInstance;
    component.country = {
      name: 'Test',
      id: 'TST',
      displayCode: 'TST',
      value: { nrOfRooms: 1, revenue: 3 },
      referenceValue: { nrOfRooms: 1, revenue: 3 },
      evolution: { difference: 0, trend: Trend.NEUTRAL },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
