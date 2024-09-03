const LinkedList = require("./LinkedList");

// const list = new LinkedList();

// list.insert_last(1);
// list.insert_last(2);
// list.insert_last(4);
// list.print(); /// 1 2 4

// list.insert_after(1, 3);
// list.insert_after(3,5);
// list.print(); /// 1 2 3 4 5

// list.insert_before(1,1)
// list.insert_before(0,-1);
// list.print(); /// -1 1 1 2 3 4 5

// list.deleteAt(1);
// list.deleteAt(0);
// list.print(); /// 1 2 3 4 5

// list.insert_last(10);
// console.log(list.back()); /// 10
// console.log(list.front()); /// 1
// console.log(list.size()); /// 6

const Stack = require("./Stack");

// const stack = new Stack();

// console.log(stack.hasData()); /// false
// stack.push(12);
// stack.push(-10);
// stack.push(42);

// console.log(stack.hasData()); /// true
// console.log(stack.size()); /// 3
// stack.print(); /// 42 -10 12

// stack.pop();
// console.log(stack.size()); /// 2
// stack.print(); /// -10 12

// console.log(stack.peek()); /// -10

const Queue = require("./Queue");

// const queue = new Queue();
// console.log("Is queue has data : ", queue.hasData()); /// false
// queue.enqueue(15);
// queue.enqueue(-10);
// queue.enqueue(23);

// console.log("Is queue has data : ", queue.hasData()); /// true
// console.log("Current size of queue = ", queue.size()); /// 3
// queue.print(); /// 15 -10 23

// while (queue.hasData()) {
//   console.log("Cuurent size of queue = ", queue.size());
//   console.log("Current peak of queue = ", queue.peek());
//   queue.dequeue();
// }

const Dictionary = require("./Dictionary");

// const dic = new Dictionary();
// console.log("Real size = ", dic.size()); /// 0
// dic.print();

// dic.set("Ali", "ali@gmail.com");
// dic.set("Adam", "adam@gmail.com");
// dic.set("Mira", "mira@gmail.com");

// console.log("Real size = ", dic.size()); /// 3
// dic.print();

// console.log("Adam value = ", dic.get("Adam")); /// adam@gmail.com
// console.log("Alovira value = ", dic.get("Alovira")); /// null

// console.log("Remove Adam from the dictionary : ", dic.remove("Adam")); /// true
// console.log("Real size = ", dic.size()); /// 2
// dic.print();

// console.log("Adam value = ", dic.get("Adam")); /// null
// console.log("Remove Ella from the dictionary : ", dic.remove("Ella")); /// false
// console.log("Real size = ", dic.size()); /// 2
// dic.print();

// dic.remove("Ali");
// dic.remove("Mira");

// console.log("Real size = ", dic.size()); /// 0
// dic.print();

// dic.set("Ahmed", "ahmed@gmail.com");
// console.log("Real size = ", dic.size()); /// 1
// dic.print();

const HashTable = require("./HashTable");

// const hashtable = new HashTable();
// console.log("Real size = ", hashtable.size()); /// 0

// hashtable.set("Ali", "ali@gmail.com");
// hashtable.set("Adam", "adam@gmail.com");
// hashtable.set("Mira", "mira@gmail.com");

// console.log("Real size = ", hashtable.size()); /// 3

// console.log("Adam value = ", hashtable.get("Adam")); /// adam@gmail.com
// console.log("Alovira value = ", hashtable.get("Alovira")); /// null

// console.log("Remove Adam from the hashtable : ", hashtable.remove("Adam")); /// true
// console.log("Real size = ", hashtable.size()); /// 2
// console.log("Adam value = ", hashtable.get("Adam")); /// null

// console.log("Remove Ella from the hashtable : ", hashtable.remove("Ella")); /// false
// console.log("Real size = ", hashtable.size()); /// 2

// hashtable.remove("Ali");
// hashtable.remove("Mira");

// console.log("Real size = ", hashtable.size()); /// 0

// hashtable.set("Ahmed", "ahmed@gmail.com");
// console.log("Real size = ", hashtable.size()); /// 1

const BinaryTree = require("./BinaryTree");
// const bt = new BinaryTree();
// bt.insert(4);
// bt.insert(6);
// bt.insert(7);
// bt.insert(5);
// bt.insert(2);
// bt.insert(1);
// bt.insert(3);

// /// results are nodes starts from first level to end level
// /// and for each level we print nodes from left to right

// bt.print();
// console.log("-----------------------------");

// console.log("Pre Order");
// bt.preOrder();
// console.log("-----------------------------");

// console.log("In Order");
// bt.inOrder();
// console.log("-----------------------------");

// console.log("Post Order");
// bt.postOrder();
// console.log("-----------------------------");

// console.log(bt.isExist("3")); /// true
// console.log(bt.isExist("10")); /// false
// console.log("-----------------------------");

// bt.delete(4);
// bt.delete(6);
// bt.print();
// console.log("-----------------------------");

// bt.delete(3);
// bt.delete(5);
// bt.print();
// console.log("-----------------------------");

// bt.delete(7);
// bt.delete(2);
// bt.delete(1);
// bt.print();
// console.log("-----------------------------");

// bt.insert(1);
// bt.insert(2);
// bt.insert(3);
// bt.insert(4);
// bt.insert(5);
// bt.insert(6);
// bt.insert(7);
// bt.Balance();
// bt.print();

const Heap = require("./Heap");
// const heap = new Heap();
// heap.print();
// heap.insert(24);
// heap.insert(32);
// heap.insert(16);
// heap.insert(45);
// heap.insert(20);
// heap.insert(53);
// heap.insert(14);
// heap.insert(27);
// heap.print();

// heap.pop();
// heap.print();
// heap.insert(11);
// heap.print();


const PriorityQueue = require('./PriorityQueue');
// const pq = new PriorityQueue();

// pq.print();
// pq.insert(4,24);
// pq.insert(4,32);
// pq.insert(1,16);
// pq.insert(2,45);
// pq.insert(1,20);
// pq.insert(5,53);
// pq.insert(3,14);
// pq.insert(3,27);
// pq.print();


// while(pq.hasData()){
//     const priority = pq.pop().priority;
//     console.log(priority);
// }