import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMotherboardComponent } from './view-motherboard.component';

describe('ViewMotherboardComponent', () => {
  let component: ViewMotherboardComponent;
  let fixture: ComponentFixture<ViewMotherboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMotherboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMotherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
