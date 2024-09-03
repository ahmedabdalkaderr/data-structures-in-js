class Node {
  constructor(_data) {
    this.data = _data;
    this.next = null;
    this.back = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  print() {
    let list = "";
    for (
      let cur_node = this.head;
      cur_node !== null;
      cur_node = cur_node.next
    ) {
      list = list.concat(`${cur_node.data} `);
    }
    console.log(list);
  }

  findAt(index) {
    if (index > this.length || index < 0 || this.length === 0) return null;

    var cur_node = this.head;
    for (let i = 0; i < index; i++) {
      cur_node = cur_node.next;
    }

    return cur_node;
  }

  insert_first(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.back = node;
      this.head = node;
    }

    this.length++;
  }

  insert_last(data) {
    const node = new Node(data);

    node.back = this.tail;
    this.tail = node;

    if (this.head === null) {
      this.head = node;
    } else {
      node.back.next = this.tail;
    }
    this.length++;
  }

  // this function will insert a new node if there are at least one element in the list
  insert_after(index, data) {
    const newNode = new Node(data);
    const node = this.findAt(index);

    if (node === null) return;

    newNode.next = node.next;
    newNode.back = node;
    node.next = newNode;

    if (node === this.tail) {
      this.tail = newNode;
    } else {
      newNode.next.back = newNode;
    }
    this.length++;
  }

  // this function will insert a new node if there are at least one element in the list
  insert_before(index, data) {
    const newNode = new Node(data);
    const node = this.findAt(index);

    if (node === null) return;

    newNode.next = node;
    newNode.back = node.back;
    node.back = newNode;

    if (node === this.head) {
      this.head = newNode;
    } else {
      newNode.back.next = newNode;
    }
    this.length++;
  }

  delete_head() {
    if(this.head === null) return;
    this.head = this.head.next;
    this.length--;
  }

  deleteAt(index) {
    const node = this.findAt(index);
    if (node === null) return;

    // head = tail
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (node === this.head) {
      this.head = node.next;
      this.head.back = null;
    } else if (node === this.tail) {
      this.tail = node.back;
      this.tail.next = null;
    } else {
      node.back.next = node.next;
      node.next.back = node.back;
    }
    this.length--;
  }

  front() {
    if (this.head === null) return;
    return this.head.data;
  }
  back() {
    if (this.tail === null) return;
    return this.tail.data;
  }
}

