import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelootyComponent } from './hotelooty.component';

describe('HotelootyComponent', () => {
  let component: HotelootyComponent;
  let fixture: ComponentFixture<HotelootyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelootyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelootyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
