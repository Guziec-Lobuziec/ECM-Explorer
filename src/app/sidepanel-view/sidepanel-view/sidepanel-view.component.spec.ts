import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelViewComponent } from './sidepanel-view.component';

describe('SidepanelViewComponent', () => {
  let component: SidepanelViewComponent;
  let fixture: ComponentFixture<SidepanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
