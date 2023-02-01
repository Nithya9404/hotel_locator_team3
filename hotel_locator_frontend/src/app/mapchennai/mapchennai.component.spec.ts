import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapchennaiComponent } from './mapchennai.component';

describe('MapchennaiComponent', () => {
  let component: MapchennaiComponent;
  let fixture: ComponentFixture<MapchennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapchennaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapchennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
