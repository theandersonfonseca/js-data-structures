const LinkedList = require('../linked-list/linked-list');

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(data) {
    if (this.linkedList.getSize() === 0) {
      this.linkedList.add(data);

      return;
    }

    this.linkedList.addAt(0, data);
  }

  pop() {
    if (this.linkedList.isEmpty()) return;

    this.linkedList.removeHead();
  }

  peek() {
    if (this.linkedList.isEmpty()) return;

    return this.linkedList.head.data;
  }

  isEmpty() {
    return this.linkedList.isEmpty();
  }

  getSize() {
    return this.linkedList.getSize();
  }

  print() {
    return this.linkedList.print();
  }
}

module.exports = Stack;
