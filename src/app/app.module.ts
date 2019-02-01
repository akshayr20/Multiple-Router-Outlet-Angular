import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { Routes } from '@angular/router';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';

@NgModule({
  declarations: [AppComponent, ContainerComponent],
  imports: [BrowserModule, Module1Module, Module2Module, Module3Module, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
