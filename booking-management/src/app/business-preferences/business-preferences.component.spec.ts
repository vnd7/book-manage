import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPreferencesComponent } from './business-preferences.component';

describe('BusinessPreferencesComponent', () => {
  let component: BusinessPreferencesComponent;
  let fixture: ComponentFixture<BusinessPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
