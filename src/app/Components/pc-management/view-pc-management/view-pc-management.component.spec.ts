import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPcManagementComponent } from './view-pc-management.component';

describe('ViewPcManagementComponent', () => {
  let component: ViewPcManagementComponent;
  let fixture: ComponentFixture<ViewPcManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPcManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
