import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { Route1Child1Component } from './route1-child1/route1-child1.component';
import { Route2Child2Component } from './route2-child2/route2-child2.component';
import { Route1Child2Component } from './route1-child2/route1-child2.component';
import { Route2Child1Component } from './route2-child1/route2-child1.component';
import { Route3Child1Component } from './route3-child1/route3-child1.component';
import { Route3Child2Component } from './route3-child2/route3-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    Route1Child1Component,
    Route2Child2Component,
    Route1Child2Component,
    Route2Child1Component,
    Route3Child1Component,
    Route3Child2Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
