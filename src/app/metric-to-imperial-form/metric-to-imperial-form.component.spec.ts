import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricToImperialFormComponent } from './metric-to-imperial-form.component';

describe('MetricToImperialFormComponent', () => {
  let component: MetricToImperialFormComponent;
  let fixture: ComponentFixture<MetricToImperialFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetricToImperialFormComponent]
    });
    fixture = TestBed.createComponent(MetricToImperialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
