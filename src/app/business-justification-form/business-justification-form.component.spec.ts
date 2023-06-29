import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessJustificationFormComponent } from './business-justification-form.component';

describe('BusinessJustificationFormComponent', () => {
  let component: BusinessJustificationFormComponent;
  let fixture: ComponentFixture<BusinessJustificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessJustificationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessJustificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
