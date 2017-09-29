export class Todo {
  id: number;
  complete: false;
  title: '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
