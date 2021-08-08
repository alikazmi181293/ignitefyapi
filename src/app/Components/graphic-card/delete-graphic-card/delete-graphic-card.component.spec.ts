import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGraphicCardComponent } from './delete-graphic-card.component';

describe('DeleteGraphicCardComponent', () => {
  let component: DeleteGraphicCardComponent;
  let fixture: ComponentFixture<DeleteGraphicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGraphicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
