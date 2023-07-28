//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.



function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function postfixToPrefix(postfixExpression) {
    const stack = [];
  
    for (let token of postfixExpression.split(' ')) {
      if (isOperator(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(`(${token} ${operand1} ${operand2})`);
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  // Test example
  const postfixExpression = '3 4 2 * +';
  console.log(postfixToPrefix(postfixExpression)); // Output: (+ 3 (* 4 2))