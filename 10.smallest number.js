//Q10. Write a program to find the smallest number using a stack.

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      const poppedValue = this.stack.pop();
      if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return poppedValue;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        throw new Error('Stack is empty.');
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Test example
  const stack = new MinStack();
  stack.push(5);
  stack.push(3);
  stack.push(9);
  stack.push(2);
  
  console.log(stack.getMin()); // Output: 2
  stack.pop();
  console.log(stack.getMin()); // Output: 3