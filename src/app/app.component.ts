import {Component} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {

  }

  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addRecord(this.newTodo);
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteRecord(todo.id);
  }

  get todos(){
    return this.todoDataService.getAll();
  }
}
