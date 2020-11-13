import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshModalComponent } from './ash-modal.component';

describe('TotalMoistureModalComponent', () => {
  let component: AshModalComponent;
  let fixture: ComponentFixture<AshModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
