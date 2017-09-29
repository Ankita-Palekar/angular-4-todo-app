import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {
  lastId: 0;
  todos: Todo[] = [];

  constructor() {
  }

  addRecord(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);
    return this;
  }

  deleteRecord(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateRecord(id: number, values: Object = {}): Todo {
    let todo;
    todo = this.getRecord(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    return todo;
  }

  getRecord(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  toggleComplete(todo: Todo) {
    let updatedTodo;
    updatedTodo = this.updateRecord(todo.id, {complete: !todo.complete});
    return updatedTodo;
  }

  getAll(): Todo[] {
    return this.todos;
  }
}
