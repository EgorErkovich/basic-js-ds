const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }
  getUnderlyingList() {
    return(this.front);
    // remove line with error and write your code here
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.rear == null) {
      this.front = this.rear = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
        // remove line with error and write your code here
  }


  dequeue() {
    if (this.front == null) {
      return;
    }

    let node = this.front;
    this.front = this.front.next;
   
    if (this.front == null) {
      this.rear = null;
    }
    return node.value;      
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
