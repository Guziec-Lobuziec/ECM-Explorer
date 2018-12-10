import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementCreatorComponent } from './agreement-creator.component';

describe('AgreementCreatorComponent', () => {
  let component: AgreementCreatorComponent;
  let fixture: ComponentFixture<AgreementCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
