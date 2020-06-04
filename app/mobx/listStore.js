import {observable} from 'mobx';

class ListStore {
  @observable count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

export default new ListStore();
