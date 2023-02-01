import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelchennaiComponent } from './hotelchennai.component';

describe('HotelchennaiComponent', () => {
  let component: HotelchennaiComponent;
  let fixture: ComponentFixture<HotelchennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelchennaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelchennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
