import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Todo} from './app/todo';
import {TodoDataService} from './app/todo-data.service';


@Injectable()

export class TodosResolver implements Resolve<Observable<Todo[]>> {
  constructor(private todoDataService: TodoDataService) {

  }

  public resolve( route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this.todoDataService.getAllTodos();
  }
}
