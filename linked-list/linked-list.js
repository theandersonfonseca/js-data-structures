const LinkedListNode = require('./linked-list-node');

class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  add(data) {
    if (!this.head) {
      this.head = new LinkedListNode(data);
      this._length++;

      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new LinkedListNode(data);
    this._length++;
  }

  addAt(index, data) {
    if (index >= this._length || index < 0) return;

    const newNode = new LinkedListNode(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;

      this._length++;

      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let indexCount = index;

    while (indexCount > 0) {
      prevNode = currentNode;
      currentNode = currentNode.next;

      indexCount--;
    }

    newNode.next = currentNode;
    prevNode.next = newNode;

    this._length++;
  }

  removeHead() {
    if (!this.head) return;

    this.head = this.head.next;
    this._length--;
  }

  remove(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.removeHead();

      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode.next) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        this._length--;

        return;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  removeAt(index) {
    if (index >= this._length || index < 0) return;

    if (index === 0) {
      this.removeHead();

      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let indexCount = index;

    while (indexCount > 0) {
      prevNode = currentNode;
      currentNode = currentNode.next;

      indexCount--;
    }

    prevNode.next = currentNode.next;

    this._length--;
  }

  indexOf(data) {
    if (this.head.data === data) return 0;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode.data !== data) {
      if (!currentNode.next) return;

      currentNode = currentNode.next;

      currentIndex++;
    }

    return currentIndex;
  }

  getElementAt(index) {
    if (index >= this._length || index < 0) return;

    if (index === 0) return this.head.data;

    let currentNode = this.head;
    let indexCount = index;

    while (indexCount > 0) {
      indexCount--;
      currentNode = currentNode.next;
    }

    return currentNode.data;
  }

  clear() {
    this.head = null;
    this._length = 0;
  }

  getSize() {
    return this._length;
  }

  contains(data) {
    if (!this.head) return false;

    if (this.head.data === data) return true;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) return true;

      currentNode = currentNode.next;
    }

    return false;
  }

  isEmpty() {
    return this._length === 0;
  }

  print() {
    if (!this.head) return '';

    let list = '';
    let currentNode = this.head;

    while (currentNode) {
      list += ` ${currentNode.data} ${currentNode.next ? '=>' : ''}`;
      currentNode = currentNode.next;
    }

    return list;
  }
}

module.exports = LinkedList;
