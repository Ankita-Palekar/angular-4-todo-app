import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should except values in construct', () => {
    let todo;
    todo = new Todo({
      title: 'learn angular as soon as possible',
      complete: true
    });
    expect(todo.title).toEqual('learn angular as soon as possible');
    expect(todo.complete).toEqual(true);
  });
});
