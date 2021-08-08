import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGraphicCardComponent } from './edit-graphic-card.component';

describe('EditGraphicCardComponent', () => {
  let component: EditGraphicCardComponent;
  let fixture: ComponentFixture<EditGraphicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGraphicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
