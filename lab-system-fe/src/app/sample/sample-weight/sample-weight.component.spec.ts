import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SampleWeightComponent } from './sample-weight.component';

describe('SampleWeightComponent', () => {
  let component: SampleWeightComponent;
  let fixture: ComponentFixture<SampleWeightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
