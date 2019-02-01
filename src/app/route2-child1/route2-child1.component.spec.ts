import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2Child1Component } from './route2-child1.component';

describe('Route2Child1Component', () => {
  let component: Route2Child1Component;
  let fixture: ComponentFixture<Route2Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route2Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route2Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
