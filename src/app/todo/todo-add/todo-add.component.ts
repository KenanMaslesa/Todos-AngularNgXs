import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoFacade } from '../+state/todo.facade';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private formSubscription: Subscription = new Subscription();

  constructor(private todoFacade: TodoFacade) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      todoItemText: new FormControl(null, [Validators.required]),
    });
  }

  public ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  public addTodo(todo: string): void {
    this.formSubscription.add();
    this.todoFacade
      .dispatchAddTodo({
        id: Date.now(),
        userId: Date.now(),
        title: todo,
        completed: false,
      })
      .subscribe(() => {
        this.clearForm();
      });
  }

  public submitForm(): void {
    this.addTodo(this.form.value.todoItemText);
  }

  public clearForm(): void {
    this.form.reset();
  }
}
