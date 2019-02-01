import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1Child1Component } from './route1-child1.component';

describe('Route1Child1Component', () => {
  let component: Route1Child1Component;
  let fixture: ComponentFixture<Route1Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route1Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
