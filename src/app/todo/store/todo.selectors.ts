import { Todo } from './../models';
import { TodoState } from './todo.state';
import { Selector } from '@ngxs/store';
import { TodoStateModel } from '../models';

export class TodoSelectors {
  @Selector([TodoState])
  static getTodoList(state: TodoStateModel): Todo[] {
    return state.todos;
  }

  @Selector([TodoState])
  static getIsLoading(state: TodoStateModel): boolean {
    return state.isLoading;
  }

  @Selector([TodoState])
  static getNumberOfUncompletedTodos(state: TodoStateModel): number {
    const todos = [...state.todos];
    const completedTodos = todos.filter((todo) => todo.completed);
    return state.todos.length - completedTodos.length;
  }

  @Selector([TodoState])
  static getCompletedTodos(state: TodoStateModel): number {
    const todos = [...state.todos];
    const completedTodos = todos.filter((todo) => todo.completed);
    return state.todos.length - completedTodos.length;
  }
}
