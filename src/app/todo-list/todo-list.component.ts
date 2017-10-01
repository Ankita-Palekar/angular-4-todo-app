import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Todo} from '../todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onToggleComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  inRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
