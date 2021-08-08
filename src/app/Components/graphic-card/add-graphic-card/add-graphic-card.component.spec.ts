import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGraphicCardComponent } from './add-graphic-card.component';

describe('AddGraphicCardComponent', () => {
  let component: AddGraphicCardComponent;
  let fixture: ComponentFixture<AddGraphicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGraphicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
