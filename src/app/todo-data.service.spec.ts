import {TestBed, inject} from '@angular/core/testing';

import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {describe} from 'selenium-webdriver/testing';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getAllTodos', () => {
    it('Should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      let todo1;
      todo1 = new Todo({title: 'Read book 1 ', complete: false});
      let todo2;
      todo2 = new Todo({title: 'Read Book 2', complete: true});
      service.addRecord(todo1);
      service.addRecord(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1;
      todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2;
      todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addRecord(todo1);
      service.addRecord(todo2);
      expect(service.getRecord(1)).toEqual(todo1);
      expect(service.getRecord(2)).toEqual(todo2);
    }));
  });


  describe('#delete(id)', () => {
    it('should remove todo with corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      let todo1;
      let todo2;

      todo1 = new Todo({title: 'hello 1', complete: true});
      todo2 = new Todo({title: 'hello 2', complete: true});

      service.addRecord(todo1);
      service.addRecord(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
      service.deleteRecord(1);
      expect(service.getAll()).toEqual([todo2]);
      service.deleteRecord(2);
      expect(service.getAll()).toEqual([]);
    }));


    it('should not remove anything if id is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo1;
      let todo2;
      todo1 = new Todo({title: 'Hello 1', complete: false});
      todo2 = new Todo({title: 'Hello 2', complete: false});
      service.addRecord(todo1);
      service.addRecord(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
      service.deleteRecord(5);
      expect(service.getAll()).toEqual([todo1, todo2]);
    }));

  });


  describe('#update(id, values)', () => {
    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      let todo;
      todo = new Todo({title: 'Hello 1', complete: false});
      service.addRecord(todo);

      let updated;

      updated = service.updateRecord(1, {
        title: 'new title'
      });

      expect(updated.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo;
      todo = new Todo({title: 'Hello 1', complete: true});
      service.addRecord(todo);
      let updated;
      updated = service.updateRecord(6, {title: 'updated data'});
      expect(updated).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('should return the udpated todo with the inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      let todo;
      todo = new Todo({title: 'hello 1', complete: false});
      service.addRecord(todo);
      let updated = service.toggleComplete(todo);
      expect(updated.complete).toEqual(false);
      updated = service.toggleComplete(todo);
      expect(updated.complete).toEqual(false);

    }));
  });
});

