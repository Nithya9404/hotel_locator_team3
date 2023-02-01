import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapbangloreComponent } from './mapbanglore.component';

describe('MapbangloreComponent', () => {
  let component: MapbangloreComponent;
  let fixture: ComponentFixture<MapbangloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapbangloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapbangloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
