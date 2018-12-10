import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementOneOneComponent } from './agreement-one-one.component';

describe('AgreementOneOneComponent', () => {
  let component: AgreementOneOneComponent;
  let fixture: ComponentFixture<AgreementOneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementOneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
