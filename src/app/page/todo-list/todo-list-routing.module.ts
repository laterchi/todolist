/*
Copyright 2021 Kingland Systems Corporation. All Rights Reserved.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from 'src/app/page/todo-list/todo-list.component';


const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule {
}
