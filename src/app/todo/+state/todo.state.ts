import { Action, State, StateContext } from '@ngxs/store';
import {
  AddTodo,
  ClearCompletedTodos,
  DeleteTodo,
  GetTodos,
  UpdateTodo,
} from './todo.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoStateModel } from '../models';

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    isLoading: true,
  },
})
@Injectable()
export class TodoState {
  constructor(private todoService: TodoService) {}

  @Action(GetTodos)
  getTodos(ctx: StateContext<TodoStateModel>) {
    ctx.patchState({
      isLoading: true,
    });
    return this.todoService.getTodos().pipe(
      tap((result) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          todos: result,
          isLoading: false,
        });
      })
    );
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, { payload }: AddTodo) {
    ctx.patchState({
      isLoading: true,
    });
    return this.todoService.addTodo(payload).pipe(
      tap((result) => {
        const state = ctx.getState();
        ctx.patchState({
          todos: [...state.todos, result],
          isLoading: false,
        });
      })
    );
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, { payload, id }: UpdateTodo) {
    ctx.patchState({
      isLoading: true,
    });
    return this.todoService.updateTodo(payload, id).pipe(
      tap((result) => {
        const state = ctx.getState();
        const todoList = [...state.todos];
        const todoIndex = todoList.findIndex((item) => item.id === id);
        todoList[todoIndex] = result;
        ctx.setState({
          ...state,
          todos: todoList,
          isLoading: false,
        });
      })
    );
  }

  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodoStateModel>, { id }: DeleteTodo) {
    ctx.patchState({
      isLoading: true,
    });
    return this.todoService.deleteTodo(id).pipe(
      tap(() => {
        const state = ctx.getState();
        const filteredArray = state.todos.filter((item) => item.id !== id);
        ctx.setState({
          ...state,
          todos: filteredArray,
          isLoading: false,
        });
      })
    );
  }

  @Action(ClearCompletedTodos)
  deleteCompletedTodos(ctx: StateContext<TodoStateModel>) {
    ctx.patchState({
      isLoading: true,
    });
    const state = ctx.getState();
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
    ctx.setState({
      ...state,
      todos: uncompletedTodos,
      isLoading: false,
    });
  }
}
