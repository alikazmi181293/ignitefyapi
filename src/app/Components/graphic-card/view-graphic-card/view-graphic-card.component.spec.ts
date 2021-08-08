import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGraphicCardComponent } from './view-graphic-card.component';

describe('ViewGraphicCardComponent', () => {
  let component: ViewGraphicCardComponent;
  let fixture: ComponentFixture<ViewGraphicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGraphicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
