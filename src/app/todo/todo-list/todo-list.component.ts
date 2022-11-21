import { TodoFacade } from '../+state/todo.facade';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  constructor(public todoFacade: TodoFacade) {}

  public ngOnInit(): void {
    this.todoFacade.dispatchGetTodos();
  }

  public deleteTodo(todoId: number): void {
    this.todoFacade.dispatchDeleteTodo(todoId);
  }

  public updateTodo(todo: Todo): void {
    this.todoFacade.dispatchUpdateTodo(
      {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed, // changing only this field
      },
      todo.id
    );
  }

  public trackById(index: number, element: Todo): number {
    return element.id;
  }
}
