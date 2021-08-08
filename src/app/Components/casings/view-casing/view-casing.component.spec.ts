import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCasingComponent } from './view-casing.component';

describe('ViewCasingComponent', () => {
  let component: ViewCasingComponent;
  let fixture: ComponentFixture<ViewCasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
