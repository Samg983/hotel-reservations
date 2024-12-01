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

  describe('plusSign', () => {
    it('should return + when the difference is positive', () => {
      component.country.evolution.difference = 1;
      expect(component.plusSign).toBe('+');
    });

    it('should return plus when the difference is 0', () => {
      component.country.evolution.difference = 0;
      expect(component.plusSign).toBe('+');
    });

    it('should return an empty string when the difference is negative', () => {
      component.country.evolution.difference = -1;
      expect(component.plusSign).toBe('');
    });
  });
});
