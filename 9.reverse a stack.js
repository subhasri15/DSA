
//Q9. Write a program to reverse a stack.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error('Stack is empty.');
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    reverse() {
      const tempStack = new Stack();
  
      while (!this.isEmpty()) {
        tempStack.push(this.pop());
      }
  
      this.items = tempStack.items;
    }
  }
  
  // Test example
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log('Original Stack:', stack.items); // Output: [1, 2, 3, 4]
  stack.reverse();
  console.log('Reversed Stack:', stack.items); // Output: [4, 3, 2, 1]