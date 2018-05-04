import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Capitalize } from './capitalize.pipe';
import { NestedSomeComponent } from './some-component/nested-some/nested-some.component';
import { BoldHoverDirective } from './bold-hover.directive';
import { CarsComponentComponent } from './cars-component/cars-component.component';
import { CarComponent } from './cars-component/car/car.component';
import { WheelsComponent } from './cars-component/wheels/wheels.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponentComponent,
    SomeComponentComponent,
    DashboardComponent,
    Capitalize,
    NestedSomeComponent,
    BoldHoverDirective,
    CarsComponentComponent,
    CarComponent,
    WheelsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [Capitalize],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
