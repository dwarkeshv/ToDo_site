import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './Components/task/task.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [

  //  {path: '',
  //  component: AppComponent,
  //  children: [
  //    { path: 'todo', component: TaskComponent },
  //  ],},
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TaskComponent
  }
  // ,{
  //   path: 'dashboard',
  //   component: TaskComponent
  // }
];
