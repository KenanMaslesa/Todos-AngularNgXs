import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoFiltersComponent } from "./todo-filters/todo-filters.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
  declarations: [TodoAddComponent, TodoListComponent, TodoFiltersComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [TodoAddComponent, TodoListComponent, TodoFiltersComponent],
})
export class TodoModule {}
