import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelmumbaiComponent } from './hotelmumbai.component';

describe('HotelmumbaiComponent', () => {
  let component: HotelmumbaiComponent;
  let fixture: ComponentFixture<HotelmumbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelmumbaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelmumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
