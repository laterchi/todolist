import { NgModule } from '@angular/core';
import { TodoListComponent } from 'src/app/page/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from 'src/app/page/todo-list/todo-list-routing.module';
import { CTimeGuideModule } from 'src/app/component/c-timeguide/c-time-guide.module';
import { CProfileModule } from 'src/app/component/c-profile/c-profile.module';
import { CNavbarModule } from 'src/app/component/c-navbar/c-navbar.module';
@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    CTimeGuideModule,
    CProfileModule,
    CNavbarModule,
  ],
})
export class TodoListModule { }
