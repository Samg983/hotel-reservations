import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryOverviewComponent } from './country-overview.component';

describe('FeatCountryOverviewComponent', () => {
  let component: CountryOverviewComponent;
  let fixture: ComponentFixture<CountryOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
