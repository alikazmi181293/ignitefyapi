import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPcManagementComponent } from './add-pc-management.component';

describe('AddPcManagementComponent', () => {
  let component: AddPcManagementComponent;
  let fixture: ComponentFixture<AddPcManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPcManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
