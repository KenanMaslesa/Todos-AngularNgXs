import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://mockend.com/KenanMaslesa/todos-api/todo';

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}?limit=10&id_order=asc`);
  }

  public deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}`, todo);
  }

  public updateTodo(payload: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, payload);
  }
}
