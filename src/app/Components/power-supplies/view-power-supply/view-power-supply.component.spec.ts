import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPowerSupplyComponent } from './view-power-supply.component';

describe('ViewPowerSupplyComponent', () => {
  let component: ViewPowerSupplyComponent;
  let fixture: ComponentFixture<ViewPowerSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPowerSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPowerSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
