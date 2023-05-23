import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRequestComponentComponent } from './change-request-component.component';

describe('ChangeRequestComponentComponent', () => {
  let component: ChangeRequestComponentComponent;
  let fixture: ComponentFixture<ChangeRequestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRequestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
