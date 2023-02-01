import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapootyComponent } from './mapooty.component';

describe('MapootyComponent', () => {
  let component: MapootyComponent;
  let fixture: ComponentFixture<MapootyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapootyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapootyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
