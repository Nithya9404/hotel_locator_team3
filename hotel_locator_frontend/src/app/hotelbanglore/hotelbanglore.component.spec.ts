import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbangloreComponent } from './hotelbanglore.component';

describe('HotelbangloreComponent', () => {
  let component: HotelbangloreComponent;
  let fixture: ComponentFixture<HotelbangloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbangloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelbangloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
