// todo.service.ts
import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    this.todos.push({ id: Date.now(), title, completed: false });
  }

  toggleTodo(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
}
