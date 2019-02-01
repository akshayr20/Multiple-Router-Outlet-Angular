import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3Child1Component } from './route3-child1.component';

describe('Route3Child1Component', () => {
  let component: Route3Child1Component;
  let fixture: ComponentFixture<Route3Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route3Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
