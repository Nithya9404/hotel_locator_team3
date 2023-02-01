import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmumbaiComponent } from './mapmumbai.component';

describe('MapmumbaiComponent', () => {
  let component: MapmumbaiComponent;
  let fixture: ComponentFixture<MapmumbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapmumbaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapmumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
