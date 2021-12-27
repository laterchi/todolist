/*
Copyright 2021 Kingland Systems Corporation. All Rights Reserved.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule),
  },
  {
    path: '**',
    loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
