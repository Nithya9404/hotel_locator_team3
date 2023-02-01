import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapkodaikanalComponent } from './mapkodaikanal.component';

describe('MapkodaikanalComponent', () => {
  let component: MapkodaikanalComponent;
  let fixture: ComponentFixture<MapkodaikanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapkodaikanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapkodaikanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
