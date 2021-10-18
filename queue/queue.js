const LinkedList = require('../linked-list/linked-list');

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(data) {
    this.linkedList.add(data);
  }

  dequeue() {
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

module.exports = Queue;
