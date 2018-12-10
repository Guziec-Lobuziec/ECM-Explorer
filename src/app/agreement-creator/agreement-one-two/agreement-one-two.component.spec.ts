import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementOneTwoComponent } from './agreement-one-two.component';

describe('AgreementOneTwoComponent', () => {
  let component: AgreementOneTwoComponent;
  let fixture: ComponentFixture<AgreementOneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementOneTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
