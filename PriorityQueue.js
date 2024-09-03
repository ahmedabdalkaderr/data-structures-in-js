class Node{
  constructor(priority, data){
    this.priority = priority;
    this.data = data;
  }
}

module.exports = class PriorityQueue {
  #data_list;
  #size;
  constructor() {
    this.#data_list = [];
    this.#size = 0;
  }

  /// we will use min heap
  insert(priority, data) {
    const node = new Node(priority, data);
    this.#data_list[this.#size] = node;
    let parentIndex = Math.floor((this.#size - 1) / 2);
    let dataIndex = this.#size;

    while (dataIndex !== 0 && priority < this.#data_list[parentIndex].priority) {
      this.#data_list[dataIndex] = this.#data_list[parentIndex];
      this.#data_list[parentIndex] = node;
      dataIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    this.#size++;
  }

  pop() {
    const root = this.#data_list[0];
    this.#data_list[0] = this.#data_list[this.#size - 1];
    this.#data_list[this.#size - 1] = null;
    this.#size--;

    let dataIndex = 0;
    let left = dataIndex * 2 + 1;
    while (left < this.#size) {
      let right = dataIndex * 2 + 2;
      let smallestIndex = left;

      if (right < this.#size && this.#data_list[right].priority < this.#data_list[left].priority)
        smallestIndex = right;
      if (this.#data_list[smallestIndex].priority >= this.#data_list[dataIndex].priority) {
        break;
      }

      let temp = this.#data_list[smallestIndex];
      this.#data_list[smallestIndex] = this.#data_list[dataIndex];
      this.#data_list[dataIndex] = temp;

      dataIndex = smallestIndex;
      left = dataIndex * 2 + 1;
    }

    return root;
  }

  hasData(){
    return this.#size > 0;
  }

  print() {
    let result = "";
    this.#data_list.forEach((node) => {
      result += `${node.data}[${node.priority}] -> `;
    });
    console.log(result);
  }
};
