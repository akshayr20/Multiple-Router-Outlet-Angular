import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3Child2Component } from './route3-child2.component';

describe('Route3Child2Component', () => {
  let component: Route3Child2Component;
  let fixture: ComponentFixture<Route3Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route3Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
