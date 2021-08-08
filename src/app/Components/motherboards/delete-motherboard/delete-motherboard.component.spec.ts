import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMotherboardComponent } from './delete-motherboard.component';

describe('DeleteMotherboardComponent', () => {
  let component: DeleteMotherboardComponent;
  let fixture: ComponentFixture<DeleteMotherboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMotherboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMotherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
