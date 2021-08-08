import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcManagementComponent } from './pc-management.component';

describe('PcManagementComponent', () => {
  let component: PcManagementComponent;
  let fixture: ComponentFixture<PcManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
