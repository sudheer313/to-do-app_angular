// app.component.ts
import { Component } from '@angular/core';
import { TodoService, Todo } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>To-Do List</h1>
    <input [(ngModel)]="newTodoTitle" (keyup.enter)="addTodo()" />
    <ul>
      <li *ngFor="let todo of todos" (click)="toggleTodo(todo.id)">
        {{ todo.title }} {{ todo.completed ? '(completed)' : '' }}
      </li>
    </ul>
  `,
  styles: [],
})
export class AppComponent {
  newTodoTitle = '';

  constructor(private todoService: TodoService) {}

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle.trim());
      this.newTodoTitle = '';
    }
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
  }
}
