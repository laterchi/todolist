import { NgModule } from '@angular/core';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';
import { TimelineModule } from 'primeng/timeline';
import { Timeline } from 'primeng/timeline/timeline';
@NgModule({
  providers: [
    TodoListComponent
  ],
  imports: [
    TimelineModule,
  ],
})
export class TodoListModule { }
