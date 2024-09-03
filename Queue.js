const LinkedList = require("./LinkedList");

module.exports = class Queue {
  #data_list;
  constructor() {
    this.#data_list = new LinkedList();
  }

  enqueue(data) {
    this.#data_list.insert_last(data);
  }

  dequeue() {
    if (this.#data_list.head !== null) this.#data_list.delete_head();
  }

  peek() {
    if (this.#data_list.head !== null) return this.#data_list.head.data;
  }

  hasData() {
    const flag = this.size()>0;
    return flag;
  }

  print() {
    this.#data_list.print();
  }
  size() {
    return this.#data_list.length;
  }
};
