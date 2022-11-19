import { TodoFacade } from '../+state/todo.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
})
export class TodoFiltersComponent implements OnInit {
  constructor(public todoFacade: TodoFacade) {}

  public ngOnInit(): void {}

  public deleteCompletedTodos(): void {
    this.todoFacade.dispatchDeleteCompletedTodos();
  }
}
