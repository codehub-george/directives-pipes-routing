import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './routes';
import { Capitalize } from './capitalize.pipe';
import { NestedSomeComponent } from './some-component/nested-some/nested-some.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponentComponent,
    SomeComponentComponent,
    DashboardComponent,
    Capitalize,
    NestedSomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [Capitalize],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
