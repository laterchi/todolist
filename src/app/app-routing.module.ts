import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./page/todo-list/todo-list.module').then(m => m.TodoListModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./page/help/help.module').then(m => m.HelpModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page/todo-list/todo-list.module').then(m => m.TodoListModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
