//Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
    const reversedExpression = prefixExpression.split(' ').reverse();
  
    for (let token of reversedExpression) {
      if (isOperator(token)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        stack.push(`(${operand1} ${token} ${operand2})`);
      } else {
        stack.push(token);
      }
    }
  
    return stack[0];
  }
  
  // Test example
  const prefixExpression = '* + 3 4 - 5 2';
  console.log(prefixToInfix(prefixExpression)); // Output: ((3 + 4) * (5 - 2))