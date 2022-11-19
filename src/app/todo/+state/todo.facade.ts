import { Select, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  AddTodo,
  ClearCompletedTodos,
  DeleteTodo,
  GetTodos,
  UpdateTodo,
} from './todo.actions';
import { Observable } from 'rxjs';
import { TodoSelectors } from './todo.selectors';
import { Todo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  @Select(TodoSelectors.getTodoList) todos$: Observable<Todo[]>;
  @Select(TodoSelectors.getIsLoading) isLoading$: Observable<boolean>;
  @Select(TodoSelectors.getNumberOfUncompletedTodos)
  numberOfUncompletedTodos$: Observable<number>;

  constructor(private store: Store) {}

  public dispatchGetTodos(): void {
    this.store.dispatch(new GetTodos());
  }

  public dispatchDeleteTodo(id: number): void {
    this.store.dispatch(new DeleteTodo(id));
  }

  public dispatchDeleteCompletedTodos(): void {
    this.store.dispatch(new ClearCompletedTodos());
  }

  public dispatchUpdateTodo(payload: Todo, id: number): Observable<Todo[]> {
    return this.store.dispatch(new UpdateTodo(payload, id));
  }

  public dispatchAddTodo(todo: Todo): Observable<Todo[]> {
    return this.store.dispatch(new AddTodo(todo));
  }
}
