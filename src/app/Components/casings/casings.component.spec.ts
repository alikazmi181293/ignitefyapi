import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasingsComponent } from './casings.component';

describe('CasingsComponent', () => {
  let component: CasingsComponent;
  let fixture: ComponentFixture<CasingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
