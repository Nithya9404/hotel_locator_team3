import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsearchformComponent } from './hotelsearchform.component';

describe('HotelsearchformComponent', () => {
  let component: HotelsearchformComponent;
  let fixture: ComponentFixture<HotelsearchformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsearchformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
