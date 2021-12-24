/*
Copyright 2021 Kingland Systems Corporation. All Rights Reserved.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';


const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,
  },
  {path: '**', component: TodoListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
