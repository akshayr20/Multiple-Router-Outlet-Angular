import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { Route1Child1Component } from './route1-child1/route1-child1.component';
import { Route1Child2Component } from './route1-child2/route1-child2.component';
import { Route3Child2Component } from './route3-child2/route3-child2.component';
import { Route3Child1Component } from './route3-child1/route3-child1.component';
import { Route2Child2Component } from './route2-child2/route2-child2.component';
import { Route2Child1Component } from './route2-child1/route2-child1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'container',
    pathMatch: 'full'
  },
  {
    path: 'container',
    component: ContainerComponent,
    children: [
      { path: 'route1-child1', component: Route1Child1Component, outlet: 'route1' },
      { path: 'route1-child2', component: Route1Child2Component, outlet: 'route1' },
      { path: 'route2-child1', component: Route2Child1Component, outlet: 'route2' },
      { path: 'route2-child2', component: Route2Child2Component, outlet: 'route2' },
      { path: 'route3-child1', component: Route3Child1Component, outlet: 'route3' },
      { path: 'route3-child2', component: Route3Child2Component, outlet: 'route3' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
