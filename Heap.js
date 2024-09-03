module.exports = class Heap {
  #data_list;
  #size;
  constructor() {
    this.#data_list = [];
    this.#size = 0;
  }

  /// we will use min heap
  insert(data) {
    this.#data_list[this.#size] = data;
    let parentIndex = Math.floor((this.#size - 1) / 2);
    let dataIndex = this.#size;

    while (dataIndex !== 0 && data < this.#data_list[parentIndex]) {
      this.#data_list[dataIndex] = this.#data_list[parentIndex];
      this.#data_list[parentIndex] = data;
      dataIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    this.#size++;

    return;
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

      if (right < this.#size && this.#data_list[right] < this.#data_list[left])
        smallestIndex = right;
      if (this.#data_list[smallestIndex] >= this.#data_list[dataIndex]) {
        console.log(this.#data_list[dataIndex], this.#data_list[smallestIndex]);
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

  print() {
    let result = "";
    this.#data_list.forEach((data) => {
      result += `${data} -> `;
    });
    console.log(result);
  }
};
