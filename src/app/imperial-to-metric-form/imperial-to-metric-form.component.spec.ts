import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperialToMetricFormComponent } from './imperial-to-metric-form.component';

describe('ImperialToMetricFormComponent', () => {
  let component: ImperialToMetricFormComponent;
  let fixture: ComponentFixture<ImperialToMetricFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImperialToMetricFormComponent]
    });
    fixture = TestBed.createComponent(ImperialToMetricFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
