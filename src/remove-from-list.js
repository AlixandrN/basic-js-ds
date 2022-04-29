const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 class ListNode {
  constructor(x) {
  this.value = x;
  this.next = null;
  }}

  class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(a) { //в конец списка 
        const node = new ListNode(a)
        if (this.tail) {this.tail.next = node}
        if(!this.head) {this.head = node}
        this.tail = node
    }
    deleteElement(a) {
      while(this.head && this.head.value === a) {
          this.head = this.head.next
      }
      let current = this.head  
      
      while(current.next) {
          if (current.next.value === a) {
              current.next = current.next.next
          } else {
              current = current.next
          }
      }
      if (this.tail.value === a) {this.tail = current}
  }
  }


function removeKFromList(l, k) {
let list = new LinkedList()
l.forEach(el => list.append(el))
list.deleteElement(k)
return list
}

module.exports = {
  removeKFromList
};


// let hh = removeKFromList([3, 1, 2, 3, 4, 5], 3)
// console.log(hh)