import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './+state/todo.state';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFiltersComponent } from './todo-filters/todo-filters.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoAddComponent, TodoListComponent, TodoFiltersComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([TodoState]),
  ],
  exports: [TodoAddComponent, TodoListComponent, TodoFiltersComponent],
})
export class TodoModule {}
