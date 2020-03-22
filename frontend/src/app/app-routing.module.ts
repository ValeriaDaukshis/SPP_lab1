import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'app/main-page/main-page.component';
import {TaskListComponent} from './tasks-manager/lists/task-list.component';
import {TaskFormComponent} from './tasks-manager/forms/task-form.component';
import {DetailTaskFormComponent} from './tasks-manager/forms/detailTask-form.component';
import { LoginComponent } from './login-manager/forms/login.component';
import { AuthGuard } from './login-manager/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard]},
  { path: 'task', component: TaskFormComponent },
  { path: 'task/:id', component: TaskFormComponent },
  { path: 'task/:id/details', component: DetailTaskFormComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
