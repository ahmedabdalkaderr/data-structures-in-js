const Queue = require("./Queue");

class TreeNode {
  constructor(_data) {
    this.data = String(_data);
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinaryTree {
  _root;
  constructor() {
    this.root = null;
  }

  Balance() {
    const nodes = [];
    this.inOrderToArray(this.root, nodes);
    this.root = this.makeTreeBalanced(0, nodes.length - 1, nodes);
  }

  inOrderToArray(node, nodes) {
    if (!node) return;
    this.inOrderToArray(node.left, nodes);
    nodes.push(node.data);
    this.inOrderToArray(node.right, nodes);
  }

  makeTreeBalanced(start, end, nodes) {
    if (start > end) return;
    const mid = (start + end) / 2;

    const newNode = new TreeNode(nodes[mid]);
    newNode.right = this.makeTreeBalanced(mid + 1, end, nodes);
    newNode.left = this.makeTreeBalanced(start, mid - 1, nodes);

    return newNode;
  }

  insert(data) {
    const newNode = new TreeNode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          break;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          break;
        }
      }
    }
  }

  find(data) {
    let currentNode = this.root;
    data = String(data);
    while (currentNode !== null) {
      if (currentNode.data === data) return currentNode;
      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return null;
  }

  findParent(data) {
    let currentNode = this.root;
    let parent = null;
    data = String(data);
    while (currentNode) {
      if (currentNode.data === data) return parent;
      parent = currentNode;
      if (data > currentNode.data) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
    return null;
  }

  isExist(data) {
    return this.find(data) !== null;
  }

  delete(data) {
    const node = this.find(data);
    if (node === null) return;
    const left = node.left,
      right = node.right;
    if (left && right) this.delete_has_childs(node);
    else if (!left && !right) this.delete_leaf(node);
    else this.delete_has_one_child(node);
  }

  delete_leaf(nodeToDelete) {
    let parent = this.findParent(nodeToDelete.data);
    if (!parent) this.root = null;
    else if (parent.left === nodeToDelete) parent.left = null;
    else parent.right = null;
  }

  delete_has_one_child(nodeToDelete) {
    const nodeToReplace =
      nodeToDelete.right !== null ? nodeToDelete.right : nodeToDelete.left;
    nodeToDelete.data = nodeToReplace.data;
    nodeToDelete.right = nodeToReplace.right;
    nodeToDelete.left = nodeToReplace.left;
  }

  delete_has_childs(nodeToDelete) {
    let currentNode = nodeToDelete.right;
    if (!currentNode) return;

    let parent_of_smallest = null;
    while (currentNode.left !== null) {
      parent_of_smallest = currentNode;
      currentNode = currentNode.left;
    }
    if (parent_of_smallest) {
      parent_of_smallest.left = currentNode.right;
    } else {
      nodeToDelete.right = currentNode.right;
    }

    nodeToDelete.data = currentNode.data;
  }

  internalHeight(node) {
    if (!node) return 0;
    return (
      1 +
      Math.max(this.internalHeight(node.left), this.internalHeight(node.right))
    );
  }

  height() {
    return this.internalHeight(this.root);
  }

  internalPreOrder(node, obj = { res: "" }) {
    if (!node) return;

    obj.res = `${obj.res}${node.data} -> `;
    this.internalPreOrder(node.left, obj);
    this.internalPreOrder(node.right, obj);
  }

  preOrder() {
    const obj = { res: "" };
    const result = this.internalPreOrder(this.root, obj);
    console.log(obj.res);
  }

  internalInOrder(node, obj = { res: "" }) {
    if (!node) return;
    this.internalInOrder(node.left, obj);
    obj.res = `${obj.res}${node.data} -> `;
    this.internalInOrder(node.right, obj);
  }

  inOrder() {
    const obj = { res: "" };
    this.internalInOrder(this.root, obj);
    console.log(obj.res);
  }

  internalPostOrder(node, obj = { res: "" }) {
    if (!node) return;

    this.internalPostOrder(node.left, obj);
    this.internalPostOrder(node.right, obj);
    obj.res = `${obj.res}${node.data} -> `;
  }

  postOrder() {
    const obj = { res: "" };
    this.internalPostOrder(this.root, obj);
    console.log(obj.res);
  }

  print() {
    if (!this.root) {
      console.log("Tree is empty...");
      return;
    }
    const q = new Queue();
    q.enqueue(this.root);
    let result = "";

    while (q.hasData()) {
      const currentNode = q.peek();
      q.dequeue();
      result += `${currentNode.data} -> `;
      if (currentNode.left) {
        q.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        q.enqueue(currentNode.right);
      }
    }
    console.log(result);
  }
};
