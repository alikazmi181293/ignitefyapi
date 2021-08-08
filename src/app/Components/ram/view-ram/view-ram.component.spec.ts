import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRamComponent } from './view-ram.component';

describe('ViewRamComponent', () => {
  let component: ViewRamComponent;
  let fixture: ComponentFixture<ViewRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
