import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePowerSupplyComponent } from './delete-power-supply.component';

describe('DeletePowerSupplyComponent', () => {
  let component: DeletePowerSupplyComponent;
  let fixture: ComponentFixture<DeletePowerSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePowerSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePowerSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
