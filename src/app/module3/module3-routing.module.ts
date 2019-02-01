import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path: 'child1',
    component: Child1Component,
    outlet: 'module1'
  },
  {
    path: 'child2',
    component: Child2Component,
    outlet: 'module1'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule {}
