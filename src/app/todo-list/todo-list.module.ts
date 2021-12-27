import { NgModule } from '@angular/core';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from 'src/app/todo-list/todo-list-routing.module';
import { CTimeGuideModule } from 'src/app/component/c-timeguide/c-time-guide.module';
@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    CTimeGuideModule,
  ],
})
export class TodoListModule { }
