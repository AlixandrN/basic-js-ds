const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
constructor() {this.rot = null;}
  root() {
    return this.rot
  }

  add(data) {
    this.rot = addWithin(this.rot, data)
    function addWithin(node, value) {
      if(!node) {return new Node(value)}
      if(node.data === value) {return node}
      if(value < node.data) {
              node.left = addWithin(node.left, value)
      } else {node.right = addWithin(node.right, value)}
      return node
    }
  }

  has(data) {
   return searchWithin(this.rot, data);
   function searchWithin(node, value) {
     if(!node) {return false}
     if(node.data === value) {return true}
     if(value < node.data) {return searchWithin(node.left, value)}
     else {return searchWithin(node.right, value)}
   }
  }

  find(data) {
    return searchData(this.rot, data);
   function searchData(node, value) {
     if(!node) {return null}
     if(node.data === value) {return node}
     if(value < node.data) {return searchData(node.left, value)}
     else {return searchData(node.right, value)}
   }
  }

  remove(data) {
    this.rot = rem(this.rot, data);

    function rem (node, value) {
      if(!node) {return null;}

      if (value < node.data) {
        node.left = rem(node.left, value);
        return node
      } else if (node.data < value) {
        node.right = rem(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {return null;}
      

      if (!node.left) {node = node.right; return node}
      if (!node.right) {node = node.left; return node}

      let minOfRight = node.right;
      while(minOfRight.left) {minOfRight = minOfRight.left}
      
      node.data = minOfRight.data
      node.right = rem(node.right, minOfRight.data);
      return node
    }}
  }

  min() {
    if (!this.rot) {return}
    let node = this.rot
    while(node.left) {node = node.left}
    return node.data
  }

  max() {
    if (!this.rot) {return}
    let node = this.rot
    while (node.right) {node = node.right}
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree()
// tree.add(1)
// tree.add(5)
// tree.add(6)
// tree.add(2)

// console.log(tree)
// console.log(tree.find(2))