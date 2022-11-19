import { Select, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  AddTodo,
  DeleteCompletedTodos,
  DeleteTodo,
  GetTodos,
  UpdateTodo,
} from './store/todo.actions';
import { Observable } from 'rxjs';
import { TodoSelectors } from './store/todo.selectors';
import { Todo, TodoStateModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  @Select(TodoSelectors.getTodoList) todos$: Observable<Todo[]>;
  @Select(TodoSelectors.getIsLoading) isLoading$: Observable<boolean>;
  @Select(TodoSelectors.getNumberOfUncompletedTodos) numberOfUncompletedTodos$: Observable<number>;

  constructor(private store: Store) {
  }

  public dispatchGetTodos(): void {
    this.store.dispatch(new GetTodos());
  }

  public dispatchDeleteTodo(id: number): void {
    this.store.dispatch(new DeleteTodo(id));
  }

  public dispatchDeleteCompletedTodos(): void {
    this.store.dispatch(new DeleteCompletedTodos());
  }

  public dispatchUpdateTodo(payload: Todo, id: number): Observable<Todo[]> {
    return this.store.dispatch(new UpdateTodo(payload, id));
  }

  public dispatchAddTodo(todo: Todo): Observable<Todo[]> {
    return this.store.dispatch(new AddTodo(todo));
  }

}
