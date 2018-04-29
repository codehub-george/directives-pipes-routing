import { DashboardComponent } from './dashboard/dashboard.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'some', component: SomeComponentComponent },
    { path: 'list', component: ListComponentComponent }
   ];
