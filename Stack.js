const LinkedList = require("./LinkedList");

module.exports = class Stack {
  #data_list;
  constructor() {
    this.#data_list = new LinkedList();
  }

  push(data) {
    this.#data_list.insert_first(data);
  }
  pop() {
    return this.#data_list.delete_head();
  }
  peek() {
    if (this.#data_list.head !== null) return this.#data_list.head.data;
  }
  hasData() {
    return this.#data_list.length > 0;
  }
  print() {
    this.#data_list.print();
  }
  size() {
    return this.#data_list.length;
  }
};
