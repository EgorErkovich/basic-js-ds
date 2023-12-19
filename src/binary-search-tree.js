const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    this.rootNode = addItem(this.rootNode, data);

    function addItem(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addItem(node.left, data);
      } else {
        node.right = addItem(node.right, data);
      }

      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return hasItem(this.rootNode, data);

    function hasItem(node, data) {

      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasItem(node.left, data);
      } else {
        return hasItem(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    return findItem(this.rootNode, data);

    function findItem(node, data) {

      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findItem(node.left, data);
      } else {
        return findItem(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootNode = removeItem(this.rootNode, data);

    function removeItem(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      } else {
        
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

        let minFromRightSubtree = node.right;
        while (minFromRightSubtree.left) {
          minFromRightSubtree = minFromRightSubtree.left;
        }

        node.data = minFromRightSubtree.data;
        node.right = removeItem(node.right, minFromRightSubtree.data);

        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};