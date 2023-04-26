import { Component } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: TodoItem[] = [
    new TodoItem(1, 'Buy groceries'),
    new TodoItem(2, 'Clean the house'),
    new TodoItem(3, 'Pay bills')
  ];

  addTodo(title: string) {
    const newId = this.todos.length + 1;
    this.todos.push(new TodoItem(newId, title));
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleCompleted(id: number) {
    const targetTodo = this.todos.find(todo => todo.id === id);
    if (targetTodo) {
      targetTodo.completed = !targetTodo.completed;
    }
  }
}
