import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelkodaikanalComponent } from './hotelkodaikanal.component';

describe('HotelkodaikanalComponent', () => {
  let component: HotelkodaikanalComponent;
  let fixture: ComponentFixture<HotelkodaikanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelkodaikanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelkodaikanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
