import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPowerSupplyComponent } from './edit-power-supply.component';

describe('EditPowerSupplyComponent', () => {
  let component: EditPowerSupplyComponent;
  let fixture: ComponentFixture<EditPowerSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPowerSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPowerSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
